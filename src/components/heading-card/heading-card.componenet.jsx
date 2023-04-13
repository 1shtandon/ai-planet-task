import { Link } from "react-router-dom";
import { ReactComponent as Bulb } from "../../assets/bulb.svg";
import "./heading-card.styles.scss";

const HeadingCard = () => {
    return (
        <div className="parent-container">
            <div className='waves' />
            <div className="heading-card-container">
                <div className="heading-card-info">
                    <div className="heading-card-title">
                        Hackathon Submissions
                    </div>
                    <p className="heading-card-description">
                        Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae.
                    </p>
                    <Link to="/upload" className="upload-link">
                        <button className="upload-btn">
                            Upload
                        </button>
                    </Link>
                </div>
                <div className="heading-card-image">
                    <Bulb className="bulb" />

                </div>

            </div>

        </div>

    );
};

export default HeadingCard;