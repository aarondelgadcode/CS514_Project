import NavBar from "../components/NavBar";
import "./OverviewPage.css"

export default function OverviewPage() {
	return (
		<div className="overview-page">
			<NavBar/>
			<div className="overview-header">
				<h1>Overview & Instructions</h1>
				<p>This space was made for you to learn more about Spatula's recipe website and how to use it.
				Note: this is our mock website representing our intended final design. The current prototype 
				is underdevelopment as we work toward matching this design. See Source Code & Document for the prototype.</p>
			</div>
			<div className="product-overview">
			<h3>Home Page</h3>
			<p>The Home page shows you, the user, our most popular recipes. The Home page encourages the user to visit the All Recipes page to explore the posted recipes.</p>
			<h3>All Recipes Page</h3>
			<p>The All Recipes page shows all the recipes that are available to be viewed by the user. When a recipe is clicked a page with an image of the meal and the instructions and ingredients are shown. At the bottom of the page the user can comment, leave a like, and save the recipe if they are logged in. At the top of the All Recipes page the user is shown a button Search Recipes, when the button is clicked it takes the user to another page where they can search the name of the recipe, or any word in any posted recipe and a list of recipes appears. Something we would like to add is that when searching a recipe, the user could also search by meal portions, and time. </p>
			<h3>Saved Recipes Page</h3>
			<p>The Saved Recipes page is a page individualized to each user; at the top of the page the user is shown a list of recipes they have posted. At the bottom of this section, if the user wants to post another recipe, they could click the publish recipe button which takes them to another page, that asks for the details of the recipe they want to post. At the bottom of Saved Recipes page, the user is shown a list of recipes they have saved.</p>
			<h3>Overview Page</h3>
			<p>The Overview page, which you are viewing now, contains different explanations and instructions on how to use our product, this website. </p>
			<h3>About Us Page</h3>
			<p>The About Us page let's our users know more about our project, such as our mission with this project, what problem we want to solve, how we are solving it with this project, and our future plans to improve our project. We also present our team, and their options of how this project is unique. </p>
			<h3>Log in Page</h3>
			<p>The Log in page lets the user log in or sign up so they are allowed to save recipes, comment, or like recipes. We ask the user for their phone number, email address, name/username, and a password. </p>
			</div>
		</div>

	)
}