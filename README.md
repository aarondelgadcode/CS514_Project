# CS514_Project

## Description
This project uses ReactJS for the frontend, Python for backend, and MySQL for our Database Management System. The recipe dataset we are using is from [kaggle](https://www.kaggle.com/datasets/shuyangli94/foodcom-recipes-with-search-terms-and-tags), which uses recipes from [Food.com](https://www.food.com/). 

## Summary of Front-End Code
The user interface is built using ReactJS and Ant Design. When users open the homepage, all available recipes are displayed as recipe cards. Users can navigate through the recipes using pagination at the bottom of the page. 

There is a search bar for users to input ingredient. After entering, the frontend sends an API request to the backend to find the matching recipes. The homepage will show recipes returned by the backend. Clickling on a recipe card takes user to the page of that recipe's details. 

In the details page, an API call is made to get the recipe with ID that matches the selected recipe. The page displays recipe name, description, ingredients, and cooking instructions. Users can return to the homepage using the `Back to recipes` link. 

## Summary of Back-End Code
The backend uses Python Flask to handle API calls from React frontend. It connects to MySQL to get information from the `recipes` table.

There are API endpoints for fetching recipes using search and fetching single recipe using ID. With the search option, user can get recipes using `name`, `ingredients`, `tags`, and `search_terms`. The backend will query the database for matching recipes and return the results in JSON format.

We are storing the data in a table named `recipes`. The recipe information includes: 

- `id`: primary key to uniquely identify recipe
- `name`: name of the recipe
- `description`: description of the recipe
- `ingredients`: list of normalized ingredients
- `ingredients_raw_str`: list of ingredients with quantities
- `serving_size`: serving size with grams
- `servings`: number of servings the recipe makes
- `steps`: recipe instructions in order (list)
- `tags`: user-assigned tags (e.g. `60-minutes-or-less`, `main-dish`, `for-large-groups`, etc.)
- `search_terms`: search terms on Food.com that returns this recipe (e.g. `diabetic`, `dinner`, `vegetarian`, etc.)