# CS514_Project

## Description
This project uses ReactJS for the frontend, Python for backend, and MySQL for our Database Management System. The recipe dataset we are using is from [kaggle](https://www.kaggle.com/datasets/shuyangli94/foodcom-recipes-with-search-terms-and-tags), which uses recipes from [Food.com](https://www.food.com/). 

## Summary of Front-End Code
The user interface is built using ReactJS and Ant Design. When users open the homepage, all available recipes are displayed as recipe cards. Users can navigate through the recipes using pagination at the bottom of the page. 

There is a search bar for users to input ingredient. After entering, the frontend sends an API request to the backend to find the matching recipes. The homepage will show recipes returned by the backend. Clickling on a recipe card takes user to the page of that recipe's details. 

In the details page, an API call is made to get the recipe with ID that matches the selected recipe. The page displays recipe name, description, ingredients, and cooking instructions. Users can return to the homepage using the `Back to recipes` link. 