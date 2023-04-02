import './submission-card.style.scss'

const getTimeDifference = (hackathonStartDate) => {
    const startTime = new Date(hackathonStartDate).getTime();
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

const SubmissionCard = ({ title, coverImage, description, hackathonStartDate }) => {
    return (
        <div className="submission-card-container">
            <div className='title-container'>
                <img className='card-img' src={coverImage} alt='submitimg'></img>
                <h5 className='card-title'>{title}</h5>
            </div>
            <div className='card-description' >{description}</div>
            <div className='time-since-submit'>
                <p>{getTimeDifference(hackathonStartDate)}</p>
            </div>
        </div>
    )
};

export default SubmissionCard;
