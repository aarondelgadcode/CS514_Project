from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from db import get_db_connection
import ast

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for React requests to backend
CORS(app)

# Converts lists from MySQL into Python lists
def parse_db_field(value):
    if not value:
        return []
    if isinstance(value, str):
        try:
            parsed = ast.literal_eval(value)
            return list(parsed) if isinstance (parsed, (list, set, tuple)) else value
        except (ValueError, SyntaxError):
            return value
    return value

# Verify backend is working
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Recipe Finder API is running"})

# Fetch recipes from database
@app.route("/api/recipes", methods=["GET"])
def get_recipes():
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)

        # Get optional search query parameter from url (ex. /api/recipes?search=chicken)
        search_query = request.args.get("search", "").strip()
        if search_query:
            # Query database to search for name, tags, and search terms of recipes
            sql_query = "SELECT * FROM recipes WHERE name LIKE %s OR tags LIKE %s OR search_terms LIKE %s LIMIT 50"
            search_pattern = f"%{search_query}%"
            cursor.execute(sql_query, (search_pattern, search_pattern, search_pattern))
        else:
            # Default query if no search parameter provided
            # Gets first 50 recipes from database
            cursor.execute("SELECT * FROM recipes LIMIT 50")
        
        recipes = cursor.fetchall()

        # Clean data from MySQL
        for recipe in recipes:
            recipe["ingredients"] = parse_db_field(recipe.get("ingredients"))
            recipe["ingredients_raw_str"] = parse_db_field(recipe.get("ingredients_raw_str"))
            recipe["steps"] = parse_db_field(recipe.get("steps"))
            recipe["tags"] = parse_db_field(recipe.get("tags"))
            recipe["search_terms"] = parse_db_field(recipe.get("search_terms"))

        return jsonify(recipes), 200
    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500
    # Close database connections
    finally:
        if "cursor" in locals():
            cursor.close()
        if "connection" in locals() and connection.is_connected():
            connection.close()

# Fetch single recipe from database
@app.route("/api/recipes/<int:recipe_id>", methods=["GET"])
def get_recipe_by_id(recipe_id):
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)

        # Execute query to get all recipe fields
        cursor.execute("SELECT * FROM recipes WHERE id = %s", (recipe_id,))
        recipe = cursor.fetchone()

        # Display error if recipe id not in database
        if not recipe:
            return jsonify({"error": "Recipe not found"}), 404

        # Clean data from MySQL
        recipe["ingredients"] = parse_db_field(recipe.get("ingredients"))
        recipe["ingredients_raw_str"] = parse_db_field(recipe.get("ingredients_raw_str"))
        recipe["steps"] = parse_db_field(recipe.get("steps"))
        recipe["tags"] = parse_db_field(recipe.get("tags"))
        recipe["search_terms"] = parse_db_field(recipe.get("search_terms"))
        
        return jsonify(recipe), 200
    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500
    # Close database connections
    finally:
        if "cursor" in locals():
            cursor.close()
        if "connection" in locals() and connection.is_connected():
            connection.close()

# Run server on http://localhost:5000
if __name__ == "__main__":
    app.run(debug=True, port=5000)