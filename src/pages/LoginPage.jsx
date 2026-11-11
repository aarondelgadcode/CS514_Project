import NavBar from "../components/NavBar";
import "./LoginPage.css";

export default function LoginPage() {
	return (
		<div className="login-page">
			<NavBar/>
			<div className="login-header">
				<h3>Log in</h3>
			</div>
		</div>
	)
}