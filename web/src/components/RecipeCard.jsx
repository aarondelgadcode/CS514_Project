import { Card } from "antd";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
	return (
		<Card className="recipe-card" title={recipe.name}>
			<h2>Ingredients</h2>

			<ul>
				{/* Display first 4 ingredients only */}
				{recipe.ingredients.slice(0, 4).map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>

			{recipe.ingredients.length > 4 && (
				<p>+ {recipe.ingredients.length - 4} more ingredients</p>
			)}
		</Card>
	);
}