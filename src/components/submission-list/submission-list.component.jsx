import SubmissionCard from "../Submission-card/submission-card.component";
import './submission-list.styles.scss';

const SubmissionList = ({ submissions }) => {
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