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
				<h3>Source Code</h3>
				<p>Github: <a href="https://github.com/aarondelgadcode/CS514_Project">https://github.com/aarondelgadcode/CS514_Project</a></p>
				<h3>Product Document</h3>
				<embed type="application/pdf" src="../product-document.pdf" width="100%" height="600px"/>
				<h3>Product Presentation Slides</h3>
				<embed type="application/pdf" src="../phase1-presentation.pdf" width="100%" height="600px"/>
				<h3>Links</h3>
				<p>Presentation Slides:<a href="https://www.canva.com/design/DAHXxUYGe0A/h6xqOEZ2pZWPqsAhhaVYlw/edit"> https://www.canva.com/design/DAHXxUYGe0A/h6xqOEZ2pZWPqsAhhaVYlw/edit</a></p><br/>
				<p>Product Document: <a href= "https://9895bf02-9b06-474e-9c22-29a032233760.filesusr.com/ugd/3ba390_c2aa6f591a954b03b141cec2831f9fa3.pdf"> https://9895bf02-9b06-474e-9c22-29a032233760.filesusr.com/ugd/3ba390_c2aa6f591a954b03b141cec2831f9fa3.pdf</a></p><br/>
			</div>
		</div>
	)
}