import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { Pagination } from "antd";
import "./HomePage.css";
import { fetchRecipes } from "../api/recipes";

import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");

	const pageSize = 6; //each page display up to six recipes

	const { data: recipes, isLoading, isError } = useQuery({
		queryKey: ["recipes", searchTerm],
		queryFn: () => fetchRecipes(searchTerm),
	});

	const handleSearch = (value) => {
		if (!value.trim()) return;

		setCurrentPage(1);
		setSearchTerm(value);
	};

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