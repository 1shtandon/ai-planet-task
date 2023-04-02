import SubmissionCard from "../Submission-card/submission-card.component";
import './submission-list.styles.scss';

const SubmissionList = ({ submissions, sortOrder, searchInput }) => {

    const sortSubmissionsNewest = () => {
        submissions.sort((a, b) => {
            return new Date(b.hackathonStartDate) - new Date(a.hackathonStartDate);
        });
    };

    const sortSubmissionsOldest = () => {
        submissions.sort((a, b) => {
            return new Date(a.hackathonStartDate) - new Date(b.hackathonStartDate);
        });
    };

    const filterSubmissionOnSearch = (searchInput) => {
        submissions = submissions.filter((submission) => {
            return submission.title.toLowerCase().includes(searchInput.toLowerCase());
        });
    };

    if (sortOrder === 'newest') {
        sortSubmissionsNewest();
    } else if (sortOrder === 'oldest') {
        sortSubmissionsOldest();
    }

    if (searchInput !== "") {
        filterSubmissionOnSearch(searchInput);
    }

    return (
        <div className="submission-list">
            {
                submissions.map((submission, index) => {
                    return (
                        <SubmissionCard
                            key={index}
                            title={submission.title}
                            coverImage={submission.coverImage}
                            description={submission.description}
                            hackathonStartDate={submission.hackathonStartDate}
                        />
                    );
                })
            }
        </div>
    );
};

export default SubmissionList;