import NavBar from "../components/NavBar";
import "./UserPage.css";

export default function UserPage() {
	return (
		<div className="user-page">
			<NavBar/>
			<h1>User Page</h1>
			<div className="userpage-header">
				<h3>Recent Posts</h3>
				<h3>Saved Recipes</h3>
			</div>
		</div>
	)
}