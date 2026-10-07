import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { Pagination } from "antd";
import "./HomePage.css"

import RecipeCard from "../components/RecipeCard";

export default function HomePage() {
	const [currentPage, setCurrentPage] = useState(1);

	const pageSize = 6; //each page display up to six recipes

	const { data: recipes, isLoading, isError } = useQuery({
		queryKey: ["recipes"],
		queryFn: async () => {
			const response = await fetch("http://127.0.0.1:5000/api/recipes");

			if (!response.ok) {
				throw new Error("Failed to fetch recipes");
			}

			return response.json();
		},
	});

	if (isLoading) {
		return <p>Loading recipes...</p>;
	}

	if (isError) {
		return <p>Unable to load recipes.</p>;
	}

	console.log(recipes);

	return (
		<div className="home-page">
			<h1>Recipes</h1>

			<div className="recipe-grid">
				{recipes.slice(
					(currentPage - 1) * pageSize, currentPage * pageSize
				).map(recipe => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</div>

			<Pagination
				current={currentPage}
				total={recipes.length}
				pageSize={pageSize}
				onChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);

}