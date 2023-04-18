import { createContext, Dispatch } from "react";
import feedbackData from "../data/feedbackData";
import Feedback from "../interfaces/Feedback";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext(feedbackData);

export const FeedbackDispatchContext = createContext<Dispatch<any>>(() => null);

export function FeedbackReducer(feedbacks: Feedback[], action: any) {
	switch (action.type) {
		case "added": {
			const newFeedback = {
				id: uuidv4(),
				...action.feedback,
			};
			return [newFeedback, ...feedbacks];
		}
		case "deleted":
			return feedbacks.filter((feedback) => feedback.id !== action.id);
		default:
			throw Error("Unknown action: " + action.type);
	}
}
