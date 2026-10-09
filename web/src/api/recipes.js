export async function fetchRecipes(searchTerm) {
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
}

export async function fetchRecipeById(id) {
	const response = await fetch(
		`http://127.0.0.1:5000/api/recipes/${id}`
	);

	if (!response.ok) {
		throw new Error("Failed to fetch recipe");
	}

	return response.json();
}