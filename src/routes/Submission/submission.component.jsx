import { Routes, Route } from "react-router-dom";
import SubmissionDetails from "../../components/submission-details/submission-details.component";

const Submission = () => {
    return (
        <Routes>
            <Route path=":id" element={<SubmissionDetails />} />
        </Routes>
    );
};

export default Submission;