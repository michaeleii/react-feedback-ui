import { useEffect, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import useFeedbackDispatch from "../hooks/useFeedbackDispatch";

function FeedbackForm() {
	const [name, setName] = useState("");
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const reviewGreaterThan10Chars = review.trim().length > 10;

	const dispatch = useFeedbackDispatch();

	function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setName(e.target.value);
	}
	function handleReviewChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (review === "") {
			setBtnDisabled(true);
			setMessage("");
		} else if (review !== "" && !reviewGreaterThan10Chars) {
			setBtnDisabled(true);
			setMessage("Review must be at least 10 characters long");
		} else {
			setBtnDisabled(false);
			setMessage("");
		}
		setReview(e.target.value);
	}

	const handleAddFbItem = (feedback: {
		name: string;
		text: string;
		rating: number;
	}) => {
		dispatch({
			type: "added",
			feedback,
		});
	};

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (reviewGreaterThan10Chars && name.trim() !== "") {
			handleAddFbItem({ name, text: review, rating });
			setName("");
			setReview("");
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2 className="text-2xl font-semibold text-center">
					How would you rate your service with us?
				</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group">
					<input
						type="text"
						onChange={handleNameChange}
						value={name}
						placeholder="Your name"
						required
					/>
				</div>
				<div className="input-group">
					<input
						type="text"
						onChange={handleReviewChange}
						value={review}
						placeholder="Write a review"
						required
					/>
					<Button type="submit" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
}
export default FeedbackForm;
