import NavBar from "../components/NavBar";
import "./LoginPage.css";

export default function LoginPage() {
	return (
		<div className="login-page">
			<NavBar/>
			<div className="login-header">
				<h1>Spatula</h1>
				<h2>Sign in or Create an Account</h2>
				<form> 
					<label for="username">Username:</label><br/>
					<input type="text" id="username" name="username"/><br/>
					<label for="password">Password:</label><br/>
					<input type="text" id="password" name="password"/><br/>
					<input type="submit" value="login"/>
					<input type="submit" value = "sign up"/>
				</form>
			</div>
		</div>
	)
}