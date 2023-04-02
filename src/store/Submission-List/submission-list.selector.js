import { createSelector } from 'reselect';

const selectSubmissionList = state => state.submissionList;

export const selectSubmissionListItems = createSelector(
    [selectSubmissionList],
    submissionList => submissionList.submissionList
);

export const selectFavouriteSubmissions = createSelector(
    [selectSubmissionListItems],
    submissionList => submissionList.filter(submission => submission.isFavourite)
);