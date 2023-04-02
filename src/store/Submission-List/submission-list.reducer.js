import { SUBMISSION_LIST_ACTION_TYPES } from "./submission-list.types";

export const SUBMISSION_LIST_INITIAL_STATE = {
    submissionList: [],
};

export const submissionListReducer = (state = SUBMISSION_LIST_INITIAL_STATE,
    action = {}) => {
    const { type, payload } = action;

    if (!payload) return state;

    switch (type) {
        case SUBMISSION_LIST_ACTION_TYPES.SET_SUBMISSION_LIST:
            return {
                ...state,
                submissionList: payload
            };
        default:
            return state;
    }
};