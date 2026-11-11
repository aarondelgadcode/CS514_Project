import {Link} from 'react-router-dom';
import "./NavBar.css"

export default function NavBar() {
	return (
		<header className="navbar">
			<nav>
				<Link to= "/" className = "home-link">Home</Link>
				<Link to="/about" className = "about-link">About</Link>
				<Link to="/overview" className = "overview-link">Overview</Link>
				<Link to="/blog" className = "blog-link">Blog</Link>
				<Link to="/login" className = "login-link">Log in</Link>
				<Link to="/sourceCode" className = "sourceCode-link">Source Code & Document</Link>
				<Link to="/userPage" className = "user-link">User Page</Link>
			</nav>
		</header>
	);
}