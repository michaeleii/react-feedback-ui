import useFeedback from "../hooks/useFeedback";

function FeedbackStats() {
	const feedbacks = useFeedback();
	const total = feedbacks.length;
	const avg =
		Math.floor(
			(feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / total) * 10
		) / 10;
	return (
		<div className="feedback-stats">
			<h4>{total} Reviews</h4>
			<h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
		</div>
	);
}
export default FeedbackStats;
