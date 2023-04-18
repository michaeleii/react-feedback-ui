import FeedbackItem from "./FeedbackItem";
import useFeedback from "../hooks/useFeedback";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList() {
	const feedbacks = useFeedback();
	if (!feedbacks || !feedbacks.length) return <p>No feedbacks to show.</p>;
	return (
		<div className="feedback-list ">
			<AnimatePresence>
				{feedbacks.map((f) => (
					<motion.div
						key={f.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						layout
					>
						<FeedbackItem key={f.id} feedback={f}></FeedbackItem>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}
export default FeedbackList;
