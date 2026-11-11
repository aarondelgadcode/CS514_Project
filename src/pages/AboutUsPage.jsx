import NavBar from "../components/NavBar";
import "./AboutUsPage.css";

export default function AboutUsPage() {

	return (
		<div className="about-page">
			<NavBar/>
			<h1>About Us</h1>
			<div className ="mission">
				<h2>Our Mission</h2>
				<p>Our Spatula team initialized this website as a project to give people a site where they could share their recipes 
				and their experience with food, as well as easily find a recipe for a nice meal to prepare at home with the ingredients 
				they already have available.</p>
			</div>
			<div className="project-stages">
				<h2>Project Stages</h2>
				<h4>Identifying Problem</h4>
				<p>People often have leftover or unused ingredients in everyday life. Many tend to struggle to find a way/recipe to use them. This can lead to unnecessary grocery purchases and food waste. It is also time-consuming to think about and search for recipes</p>
				<h4>Product Value</h4>
				<p>Allows users to input ingredients they have and pick the recipes that match those ingredients. The app is a convenient tool for meal planning while potentially helping reduce food waste and save time.</p>
				<h4>Future Plan</h4>
				<p>Our future plan is to develop a way to allow users to save recipes to their account, and to keep track of ingredients at their home so they are notified before the ingredient expires.</p>
			</div>
			<div className="presenting-team">
				<h2>Meet Our Team</h2>
				<p>Chau Pham - Front-End Developer</p>
				<p>Aaron Delgado - Back-End Developer</p>
				<p>Andres Ramos - Presentation Designer</p>
				<p>William Gray - Back-End Developer</p>
				<p>Dhruv Ramgiri - Front-End Developer</p>
				<p>Itali Pizarro Valentin - Front-End Developer</p>
			</div>
		</div>
	)
}