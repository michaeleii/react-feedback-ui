import Feedback from "../interfaces/Feedback";
import Card from "./shared/Card";
import { FaTrash } from "react-icons/fa";

function FeedbackItem({
	feedback,
	handleDelete,
}: {
	feedback: Feedback;
	handleDelete: (id: number) => void;
}) {
	return (
		<Card>
			<h3 className="text-xl font-bold">{feedback.name}</h3>
			<div className="num-display">{feedback.rating}</div>
			<button className="close" onClick={() => handleDelete(feedback.id)}>
				<FaTrash></FaTrash>
			</button>
			<div className="text-display">{feedback.text}</div>
		</Card>
	);
}
export default FeedbackItem;
