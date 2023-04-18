import { Link } from "react-router-dom";
import Card from "../shared/Card";
function About() {
	return (
		<Card>
			<div className="about">
				<h1>About this Project</h1>
				<p>This is a React app to leave feedback for a product or service.</p>
			</div>
			<p>Version: 1.0.0</p>
			<p className="mt-5 underline hover:text-accent">
				<Link to="/">Back to home</Link>
			</p>
		</Card>
	);
}
export default About;
