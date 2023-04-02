import HeadingCard from "../../components/heading-card/heading-card.componenet";
import SubmissionCard from "../../components/Submission-card/submission-card.component";
import SubmissionNavbar from "../../components/submission-navbar/submission-navbar.component";

const submission =
{
    title: "Submission 1",
    coverImg: "https://images.unsplash.com/photo-1679678691010-985ab6b8ff62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    timeOfSubmission: "04-01-2023"
};

const Home = () => {
    return (
        <>
            <HeadingCard />
            <div className="submission-container">
                <div className="submission-header">
                    <SubmissionNavbar />
                </div>
                <div className="cards-list-container">
                    <SubmissionCard title={submission.title} coverImg={submission.coverImg} description={submission.description} timeOfSubmission={submission.timeOfSubmission} />
                </div>
            </div>
        </>
    );
}

export default Home;