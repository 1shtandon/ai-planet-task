import { combineReducers } from "redux";
import { submissionListReducer } from "./Submission-List/submission-list.reducer";

export const rootReducer = combineReducers({
    // Add reducers here
     submissionList: submissionListReducer,
});