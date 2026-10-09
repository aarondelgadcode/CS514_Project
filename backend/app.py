from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from db import get_db_connection
import ast
import json

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for React requests to backend
CORS(app)

# Converts lists from MySQL into Python lists for React
def parse_db_field(value):
    if not value:
        return []
    if isinstance(value, str):
        stripped = value.strip()
        # Try standard JSON parsing first
        try:
            return json.loads(stripped)
        except (json.JSONDecodeError, TypeError):
            pass

        # Try Python literal evaluation for sets/tuples stored as strings
        try:
            parsed = ast.literal_eval(value)
            if isinstance(parsed, (list, set, tuple)):
                return list(parsed)
            return [parsed]
        except (ValueError, SyntaxError):
            return [stripped]

    return value if isinstance(value, list) else [value]

# Verify backend is working
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Recipe Finder API is running"})

# Fetch recipes from database with optional searching
@app.route("/api/recipes", methods=["GET"])
def get_recipes():
    connection = None
    cursor = None
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)

        # Get optional search query parameter from url (ex. /api/recipes?search=chicken)
        search_query = request.args.get("search", "").strip()
        if search_query:
            # Query database to search for name, ingredients, tags, and search terms of recipes
            sql_query = "SELECT * FROM recipes WHERE name LIKE %s OR ingredients LIKE %s OR tags LIKE %s OR search_terms LIKE %s LIMIT 50"
            search_pattern = f"%{search_query}%"
            cursor.execute(sql_query, (search_pattern, search_pattern, search_pattern, search_pattern))
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
        return jsonify({"error": f"Database Error: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"error": f"Server Error: {str(e)}"}), 500
    # Close database connections
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()

# Fetch single recipe from database
@app.route("/api/recipes/<int:recipe_id>", methods=["GET"])
def get_recipe_by_id(recipe_id):
    connection = None
    cursor = None
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
        return jsonify({"error": f"Database Error: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"error": f"Server Error: {str(e)}"}), 500
    # Close database connections
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()

# Run server on http://localhost:5000
if __name__ == "__main__":
    app.run(debug=True, port=5000)