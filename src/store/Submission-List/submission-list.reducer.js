import { SUBMISSION_LIST_ACTION_TYPES } from "./submission-list.types";

// import all images from the assets folder
import image1 from "./../../assets/InterviewMe.png";
import image2 from "./../../assets/Lorem ipsum.png";
import image3 from "./../../assets/Potter ipsum.png";
import image4 from "./../../assets/Pizza Ipsum.png";

export const SUBMISSION_LIST_INITIAL_STATE = {
    submissionList: [
        {
            id: 1,
            title: "InterviewMe",
            description: "This is the first submission sadkasjhdkashdhas askdhaksjdhkashd askdhsaiuydwbad sdbsamdkasdiausud sadkjhsaiduasd aksdhaksdhaskd",
            summary: "Built with GPT-3, React , and Flask. Practice interviews with AI and ace your next interview.",
            coverImage: image1,
            hackathonName: "Smart International Hackathon",
            isFavourite: false,
            hackathonStartDate: "2021-09-11",
            hackathonEndDate: "2021-9-11",
            githubSubmissionLink: "https://www.github.com/1shtandon",
            otherLinks: "https://leetcode.com/vantan110/",
            timeOfSubmission: "2021-10-10",
        },
        {
            id: 2234234,
            title: "Lorem Ipsum",
            description: "This is the second submission",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi.",
            coverImage: image2,
            hackathonName: "Hackathon 2",
            isFavourite: false,
            hackathonStartDate: "2018-10-11",
            hackathonEndDate: "2021-10-12",
            githubSubmissionLink: "https://www.github.com/1shtandon",
            otherLinks: "https://leetcode.com/vantan110/",
            timeOfSubmission: "2021-10-11",
        },
        {
            id: 3454545,
            title: "Submission 3",
            description: "This is the third submission",
            summary: "This is the summary of the submission",
            coverImage: image3,
            hackathonName: "Hackathon 3",
            isFavourite: false,
            hackathonStartDate: "2021-11-11",
            hackathonEndDate: "2021-03-02",
            githubSubmissionLink: "https://www.github.com/1shtandon",
            otherLinks: "https://leetcode.com/vantan110/",
            timeOfSubmission: "2021-11-11",
        },
        {
            id: 4998,
            title: "Submission 4",
            description: "This is the fourth submission",
            summary: "This is the summary of the submission",
            coverImage: image4,
            hackathonName: "Hackathon 4",
            isFavourite: false,
            hackathonStartDate: "2022-10-10",
            hackathonEndDate: "2022-10-10",
            githubSubmissionLink: "https://www.github.com/1shtandon",
            otherLinks: "https://leetcode.com/vantan110/",
            timeOfSubmission: "2022-10-10",
        }
    ],
};

export const submissionListReducer = (state = SUBMISSION_LIST_INITIAL_STATE,
    action = {}) => {
    const { type, payload } = action;

    if (!payload) return state;

    switch (type) {
        case SUBMISSION_LIST_ACTION_TYPES.SET_SUBMISSION_LIST:
            localStorage.setItem("submissionList", JSON.stringify(payload));
            return {
                ...state,
                submissionList: payload
            };
        default:
            return state;
    }
};