import useFeedbackDispatch from "../hooks/useFeedbackDispatch";
import Feedback from "../interfaces/Feedback";
import Card from "./shared/Card";
import { FaTrash, FaEdit } from "react-icons/fa";

function FeedbackItem({ feedback }: { feedback: Feedback }) {
	const dispatch = useFeedbackDispatch();
	const handleDeleteFbItem = (id: number) => {
		dispatch({
			type: "deleted",
			id,
		});
	};
	return (
		<Card>
			<h3 className="text-xl font-bold">{feedback.name}</h3>
			<div className="num-display">{feedback.rating}</div>
			<button className="close" onClick={() => handleDeleteFbItem(feedback.id)}>
				<FaTrash></FaTrash>
			</button>
			<button className="edit">
				<FaEdit></FaEdit>
			</button>
			<div className="text-display">{feedback.text}</div>
		</Card>
	);
}
export default FeedbackItem;
