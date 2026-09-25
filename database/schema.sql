CREATE DATABASE IF NOT EXISTS recipe_finder;
USE recipe_finder;

DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    ingredients TEXT,
    ingredients_raw_str TEXT,
    serving_size VARCHAR(255),
    servings INT,
    steps TEXT,
    tags TEXT,
    search_terms TEXT
);