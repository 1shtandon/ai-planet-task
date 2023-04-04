import { SUBMISSION_LIST_ACTION_TYPES } from "./submission-list.types";
import { createAction } from './../reducers.util';


const addSubmissionToList = (submissionList, title, description, summary, coverImage, hackathonName, hackathonStartDate, hackathonEndDate, githubSubmissionLink, otherLinks, timeOfSubmission) => {
    submissionList.push({
        id: submissionList.length ? submissionList[submissionList.length - 1].id + 1 : 1,
        title,
        description,
        summary,
        coverImage,
        hackathonName,
        isFavourite: false,
        hackathonStartDate,
        hackathonEndDate,
        githubSubmissionLink,
        otherLinks,
        timeOfSubmission
    });
    return [...submissionList];
}


const editSubmissionInList = (submissionList, submission, newSubmissionTitle, newSubmissionDescription, newSubmissionSummary, newSubmissionCoverImage, newHackathonName, newHackathonStartDate, newHackathonEndDate, newGithubSubmissionLink, newOtherLinks, newTimeOfSubmission) => {
    const newSubmissionList = [...submissionList];
    const index = newSubmissionList.indexOf(submission);
    newSubmissionList[index] = {
        ...submission,
        title: newSubmissionTitle,
        description: newSubmissionDescription,
        summary: newSubmissionSummary,
        coverImage: newSubmissionCoverImage,
        hackathonName: newHackathonName,
        hackathonStartDate: newHackathonStartDate,
        hackathonEndDate: newHackathonEndDate,
        githubSubmissionLink: newGithubSubmissionLink,
        otherLinks: newOtherLinks,
        timeOfSubmission: newTimeOfSubmission
    }
    return [...newSubmissionList];
}



export const uploadSubmissionAction = (submissionList, title, description, summary, coverImage, hackathonName, isFavourite, hackathonStartDate, hackathonEndDate, githubSubmissionLink, otherLinks, timeOfSubmission) => {
    const newSubmissionList = addSubmissionToList(submissionList, title, description, summary, coverImage, hackathonName, isFavourite, hackathonStartDate, hackathonEndDate, githubSubmissionLink, otherLinks, timeOfSubmission);
    return createAction(SUBMISSION_LIST_ACTION_TYPES.SET_SUBMISSION_LIST, newSubmissionList);
}

export const editSubmissionAction = (submissionList, submission, newSubmissionTitle, newSubmissionDescription, newSubmissionSummary, newSubmissionCoverImage, newHackathonName, newHackathonStartDate, newHackathonEndDate, newGithubSubmissionLink, newOtherLinks, newTimeOfSubmission) => {
    const newSubmissionList = editSubmissionInList(submissionList, submission, newSubmissionTitle, newSubmissionDescription, newSubmissionSummary, newSubmissionCoverImage, newHackathonName, newHackathonStartDate, newHackathonEndDate, newGithubSubmissionLink, newOtherLinks, newTimeOfSubmission);
    return createAction(SUBMISSION_LIST_ACTION_TYPES.SET_SUBMISSION_LIST, newSubmissionList);
}



export const toggleFavouriteAction = (submissionList, id) => {
    const newSubmissionList = submissionList.map(submission => {
        if (submission.id === id) {
            return {
                ...submission,
                isFavourite: !submission.isFavourite
            }
        }
        return submission;
    });
    return createAction(SUBMISSION_LIST_ACTION_TYPES.SET_SUBMISSION_LIST, newSubmissionList);
}

export const rehydrateSubmissionListAction = (submissionList) => {
    return createAction(SUBMISSION_LIST_ACTION_TYPES.SET_SUBMISSION_LIST, submissionList);
}

export const deleteSubmissionAction = (submissionList, id) => {
    const newSubmissionList = submissionList.filter(submission => submission.id !== id);
    return createAction(SUBMISSION_LIST_ACTION_TYPES.SET_SUBMISSION_LIST, newSubmissionList);
}


