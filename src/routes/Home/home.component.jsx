import HeadingCard from "../../components/heading-card/heading-card.componenet";
import SubmissionList from "../../components/submission-list/submission-list.component";
import SubmissionNavbar from "../../components/submission-navbar/submission-navbar.component";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSubmissionListItems, selectFavouriteSubmissions } from "../../store/Submission-List/submission-list.selector";
import './home.style.scss';

const Home = () => {

    const [sortOrder, setSortOrder] = useState('newest');
    const [submissionType, setSubmissionType] = useState("one");
    const [searchInput, setSearchInput] = useState("");

    const submissions = useSelector(selectSubmissionListItems);
    const favouriteSubmissions = useSelector(selectFavouriteSubmissions);

    return (
        <>
            <HeadingCard />
            <div className="submission-container">
                <div className="submission-header">
                    <SubmissionNavbar sortOrder={sortOrder} setSortOrder={setSortOrder} submissionType={submissionType} setSubmissionType={setSubmissionType} setSearchInput={setSearchInput} />
                </div>
                <div className="cards-list-container">
                    <SubmissionList submissions={submissionType === 'one' ? submissions : favouriteSubmissions} sortOrder={sortOrder} searchInput={searchInput} />
                </div>
            </div>
        </>
    );
}

export default Home;