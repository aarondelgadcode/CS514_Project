import NavBar from "../components/NavBar";
import "./SourceCodePage.css";

export default function SourceCodePage() {

	return (
		<div className="sourceCode-page">
			<NavBar/>
			<div className="sourceCode-header">
				<h1>Source Code & Document</h1>
			</div>
			<div className="sources-listing">
				<h3>Github</h3>
				<a href="https://github.com/aarondelgadcode/CS514_Project">Link: https://github.com/aarondelgadcode/CS514_Project </a>
				<h3>Product Document</h3>
				<a href="https://drive.google.com/file/d/1J5gVRIOoy-GNHZbzo7__CcZPfBdB8RZT/view">Link: https://drive.google.com/file/d/1J5gVRIOoy-GNHZbzo7__CcZPfBdB8RZT/view</a>
				<h3>Other Sources</h3>
				<a href="https://www.canva.com/design/DAHXxUYGe0A/h6xqOEZ2pZWPqsAhhaVYlw/edit">Presentation Slides: https://www.canva.com/design/DAHXxUYGe0A/h6xqOEZ2pZWPqsAhhaVYlw/edit</a>
			</div>
		</div>
	)
}