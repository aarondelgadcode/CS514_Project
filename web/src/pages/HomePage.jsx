import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { Pagination } from "antd";
import "./HomePage.css";

import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");

	const pageSize = 6; //each page display up to six recipes

	const { data: recipes, isLoading, isError } = useQuery({
		queryKey: ["recipes", searchTerm],
		queryFn: async () => {
			const params = new URLSearchParams();

			if (searchTerm) {
				params.set("search", searchTerm);
			}

			const response = await fetch(
				`http://127.0.0.1:5000/api/recipes?${params.toString()}`
			);

			if (!response.ok) {
				throw new Error("Failed to fetch recipes");
			}

			return response.json();
		},
	});

	const handleSearch = (value) => {
		if (!value.trim()) return;

		setCurrentPage(1);
		setSearchTerm(value);
	};

	console.log(recipes);

	return (
		<div className="home-page">
			<div className="home-header">
				<h1>Recipes</h1>

				<SearchBar onSearch={handleSearch} />
			</div>


			{isError && <p>Unable to load recipes.</p>}

			{isLoading ? (<p>Loading recipes...</p>) : (
				<>
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
				</>
			)}
		</div>
	);

}