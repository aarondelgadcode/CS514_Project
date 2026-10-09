import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipeById } from "../api/recipes";

import "./RecipeDetails.css";

export default function RecipeDetails() {
	const { id } = useParams();

	const { data: recipe, isLoading, isError } = useQuery({
		queryKey: ["recipe", id],
		queryFn: () => fetchRecipeById(id),
	});

	if (isLoading) return <p>Loading recipe...</p>;
	if (isError) return <p>Unable to load recipe</p>;
	if (!recipe) return <p>Recipe not found</p>;

	return (
		<div className="recipe-details">
			<Link to="/" className="back-link">&#8592; Back to recipes </Link>

			<h1>{recipe.name}</h1>
			<p>{recipe.description}</p>

			<section className="recipe-section">
				<h2>Ingredients</h2>
				<ul className="recipe-ingredients">
					{recipe.ingredients.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
			</section>


			<section className="recipe-section">
				<h2>Instructions</h2>
				<ol className="recipe-steps">
					{recipe.steps.map((step, index) => (
						<li key={index}>{step}</li>
					))}
				</ol>
			</section>
		</div>
	)
}