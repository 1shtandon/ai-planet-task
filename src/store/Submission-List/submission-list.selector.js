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

export const selectSubmissionById = (submissionId) => createSelector(
    [selectSubmissionListItems],
    submissionList => submissionList.find(submission => submission.id === Number(submissionId))
);
