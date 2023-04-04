import './submission-card.style.scss'
import { useNavigate } from 'react-router-dom';

const getTimeDifference = (timeOfSubmission) => {
    const startTime = new Date(timeOfSubmission).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - startTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (seconds < 60) {
        return `uploaded ${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `uploaded ${minutes} minutes ago`;
    } else if (hours < 24) {
        return `uploaded ${hours} hours ago`;
    } else if (days < 30) {
        return `uploaded ${days} days ago`;
    } else if (months < 12) {
        return `uploaded ${months} months ago`;
    } else {
        return `uploaded ${years} years ago`;
    }
};

const SubmissionCard = ({ id, title, coverImage, summary, timeOfSubmission }) => {

    const checkImageType = (image) => {
        // if image type is object then it is a file
        if (typeof image === 'object') {
            return URL.createObjectURL(image);
        }
        // if image type is string then it is a url
        else {
            return image;
        }
    };
    const navigate = useNavigate();

    return (
        <div className="submission-card-container"
            onClick={() => {
                navigate(`/submission/${id}`);
            }}
        >
            <div className='title-container'>
                <img className='card-img' src={checkImageType(coverImage)} alt='submitimg'></img>
                <h5 className='card-title'>{title}</h5>
            </div>
            <div className='card-description' >{summary}</div>
            <div className='time-since-submit'>
                <p>{getTimeDifference(timeOfSubmission)}</p>
            </div>
        </div>
    )
};

export default SubmissionCard;
