import HeadingCard from "../../components/heading-card/heading-card.componenet";
import SubmissionList from "../../components/submission-list/submission-list.component";
import SubmissionNavbar from "../../components/submission-navbar/submission-navbar.component";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSubmissionListItems, selectFavouriteSubmissions } from "../../store/Submission-List/submission-list.selector";
import './home.style.scss';

const submission =
{
    title: "Submission 1",
    coverImage: "https://images.unsplash.com/photo-1680169259359-b7f38c08c0f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    hackathonStartDate: "04-01-2023"
};


const Home = () => {

    const [sortOrder, setSortOrder] = useState('newest');
    const [submissionType, setSubmissionType] = useState("one");

    const submissions = useSelector(selectSubmissionListItems);
    const favouriteSubmissions = useSelector(selectFavouriteSubmissions);

    return (
        <>
            <HeadingCard />
            <div className="submission-container">
                <div className="submission-header">
                    <SubmissionNavbar sortOrder={sortOrder} setSortOrder={setSortOrder} submissionType={submissionType} setSubmissionType={setSubmissionType} />
                </div>
                <div className="cards-list-container">
                    {submissionType === "one" ? <SubmissionList submissions={submissions} sortOrder={sortOrder} /> : <SubmissionList submissions={favouriteSubmissions} sortOrder={sortOrder} />}
                </div>
            </div>
        </>
    );
}

export default Home;