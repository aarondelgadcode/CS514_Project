import { Card } from "antd";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
	return (
		<Link to={`/recipes/${recipe.id}`} className="recipe-card-link">
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
		</Link>
	);
}