import FeedbackItem from "./FeedbackItem";
import useFeedback from "../hooks/useFeedback";
import useFeedbackDispatch from "../hooks/useFeedbackDispatch";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList() {
	const feedbacks = useFeedback();
	const dispatch = useFeedbackDispatch();

	const handleDeleteFbItem = (id: number) => {
		dispatch({
			type: "deleted",
			id,
		});
	};
	if (!feedbacks || !feedbacks.length) return <p>No feedbacks to show.</p>;
	return (
		<div className="feedback-list ">
			<AnimatePresence>
				{feedbacks
					.map((f) => (
						<motion.div
							key={f.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							layout
						>
							<FeedbackItem
								key={f.id}
								feedback={f}
								handleDelete={handleDeleteFbItem}
							></FeedbackItem>
						</motion.div>
					))
					.reverse()}
			</AnimatePresence>
		</div>
	);
}
export default FeedbackList;
