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
    if value is None or value == "":
        return []
    if isinstance(value, str):
        stripped = value.strip()
        if not stripped:
            return []
        
        # Try standard JSON parsing first
        try:
            parsed = json.loads(stripped)
            if isinstance(parsed, list):
                return parsed
            return [parsed]
        except (json.JSONDecodeError, TypeError):
            pass

        # Try Python literal evaluation for sets/tuples stored as strings
        try:
            parsed = ast.literal_eval(stripped)
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
        tag_query = request.args.get("tags", "").strip() or request.args.get("tag", "").strip()

        # Build dynamic SQL query
        sql_query = "SELECT * FROM recipes WHERE 1=1"
        params = []

        if search_query:
            sql_query += " AND (name LIKE %s OR ingredients LIKE %s OR tags LIKE %s OR search_terms LIKE %s)"
            search_pattern = f"%{search_query}%"
            params.append(search_pattern)
            params.append(search_pattern)
            params.append(search_pattern)
            params.append(search_pattern)

        if tag_query:
            sql_query += " AND tags LIKE %s"
            tag_pattern = f"%{tag_query}%"
            params.append(tag_pattern)

        sql_query += " LIMIT 50"

        cursor.execute(sql_query, tuple(params))
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