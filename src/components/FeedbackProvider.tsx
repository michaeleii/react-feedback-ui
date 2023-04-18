import { useReducer } from "react";

import {
	FeedbackContext,
	FeedbackDispatchContext,
	FeedbackReducer,
} from "../context/FeedbackContext";

import feedbackData from "../data/feedbackData";

function FeedbackProvider({ children }: { children: React.ReactNode }) {
	const [feedbacks, dispatch] = useReducer(FeedbackReducer, feedbackData);
	return (
		<FeedbackContext.Provider value={feedbacks}>
			<FeedbackDispatchContext.Provider value={dispatch}>
				{children}
			</FeedbackDispatchContext.Provider>
		</FeedbackContext.Provider>
	);
}
export default FeedbackProvider;
