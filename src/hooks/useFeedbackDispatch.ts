import { useContext } from "react";
import { FeedbackDispatchContext } from "../context/FeedbackContext";

function useFeedbackDispatch() {
	return useContext(FeedbackDispatchContext);
}

export default useFeedbackDispatch;
