import NavBar from "../components/NavBar";
import "./BlogPage.css";

export default function BlogPage() {

	return (
		<div className="blog-page">
			<NavBar/>
			<h1>Blog</h1>
			<div className="paragraph1">
				<h3>Chau Pham</h3>
				<p>Our project aims to help users save time and make better use of the ingredients they already have at home. 
					Users can find recipes simply by inputting ingredients they have available. This makes meal planning more convenient 
					and encourages users to try new dishes they might not have considered before. The project is unique because instead of 
					requiring users to start with a specific dish in mind, we start with the ingredients they have. This makes the process 
					easier and more practical.</p>
			</div>
			<div className="paragraph2">
				<h3>Aaron Delgado</h3>
				<p>Our project helps people turn the food they already have into a meal. We designed it so that anyone can use it, whether 
					they cook every day or have never cooked before. The pages are clean and easy to read, and nothing gets in your way. It 
					is unique because it puts the person first, not the recipe.</p>
			</div>
			<div className="paragraph3">
				<h3>Andres Ramos</h3>
				<p>Existing recipe apps often help users find a dish and then figure out what groceries to buy. Spatula does the opposite by 
					helping users discover meals from ingredients they already own. We help users discover new meal ideas using ingredients 
					they might overlook. Our goal is to make choosing what to cook easier for people who can’t decide.</p>
			</div>
			<div className="paragraph4">
				<h3>William Gray</h3>
				<p>Our project provides an easy way for people to find recipes using ingredients they already have in their kitchen. Users 
					can just enter the ingredients they plan on using, and our recipe finder gives them meal suggestions based on the 
					ingredients. If they already have a specific dish in mind, it is also easy to find that directly. This project is unique 
					because it allows users to find new recipes from their available ingredients or search for a certain dish. Users can stick 
					with what they are comfortable with or try something new.</p>
			</div>
			<div className = "paragraph5">
				<h3>Dhruv Ramgiri</h3>
				<p>Most meal apps begin with a recipe, leaving you to choose the ingredients. Spatula does it in reverse. Enter what you have 
					in your kitchen and Spatula gives you ideas for things you can cook immediately, some of which may not have occurred to 
					you at all. If you already have an idea about what you want to cook, just enter the recipe name to get started. We strive 
					to eliminate the uncertainty and stress surrounding the “What should I make for dinner?” dilemma for those who have 
					difficulty making decisions.</p>
			</div>
			<div className="paragraph6">
				<h3>Itali Pizarro Valentin</h3>
				<p>With our project we aim to reach users that are looking to use every ingredient they have at their home and help them 
					reduce the times when food goes to waste. Sometimes users may have no idea what to cook or prepare with an ingredient 
					and end up throwing it away because it spoils before they could go to the store to buy other ingredients to prepare a 
					meal, they already know how to prepare.  Users could see that this project is unique in that it allows them to filter 
					recipes through ingredients, not just recipe names, or type of meal.</p>
			</div>
		</div>
	)
}