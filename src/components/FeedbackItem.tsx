import Feedback from "../interfaces/Feedback";
import Card from "./shared/Card";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";

import useFeedbackDispatch from "../hooks/useFeedbackDispatch";
import { useState } from "react";
import RatingSelect from "./RatingSelect";

function FeedbackItem({ feedback }: { feedback: Feedback }) {
	const dispatch = useFeedbackDispatch();
	const [edit, setEdit] = useState(false);
	const [editItem, setEditItem] = useState(feedback);

	const handleDeleteFbItem = (id: number) => {
		dispatch({
			type: "deleted",
			id,
		});
	};

	const handleEditFbItem = () => {
		setEdit(true);
	};

	const handleConfirmEdit = () => {
		setEdit(false);
		setEditItem({ ...editItem });
		dispatch({
			type: "updated",
			feedback: editItem,
		});
	};

	const handleCancelEdit = () => {
		setEdit(false);
		setEditItem({ ...feedback });
	};

	function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEditItem({ ...editItem, name: e.target.value });
	}
	function handleReviewChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEditItem({ ...editItem, text: e.target.value });
	}

	if (edit) {
		return (
			<Card>
				<div className="input-group edit-input">
					<input
						type="text"
						className="text-xl font-bold"
						value={editItem.name}
						onChange={handleNameChange}
					/>
				</div>
				<div className="num-display">{editItem.rating}</div>
				<button
					className="close"
					onClick={() => handleDeleteFbItem(editItem.id)}
				>
					<FaTrash></FaTrash>
				</button>
				<button className="confirm" onClick={() => handleConfirmEdit()}>
					<FaCheck></FaCheck>
				</button>

				<button className="cancel" onClick={() => handleCancelEdit()}>
					<FaTimes></FaTimes>
				</button>
				<div className="input-group edit-input">
					<input
						type="text"
						className="text-display"
						value={editItem.text}
						onChange={handleReviewChange}
					/>
				</div>
			</Card>
		);
	}

	return (
		<Card>
			<h3 className="text-xl font-bold py-[8px]">{feedback.name}</h3>
			<div className="num-display">{feedback.rating}</div>
			<button className="close" onClick={() => handleDeleteFbItem(feedback.id)}>
				<FaTrash></FaTrash>
			</button>
			<button className="edit" onClick={() => handleEditFbItem()}>
				<FaEdit></FaEdit>
			</button>
			<div className="text-display py-[8px]">{feedback.text}</div>
		</Card>
	);
}
export default FeedbackItem;
