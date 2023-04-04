import { Routes, Route } from "react-router-dom";
import EditForm from "../../components/edit-submission-form/edit-form.component";

const EditSubmission = () => {
    return (
        <Routes>
            <Route path=":id" element={<EditForm />} />
        </Routes>
    );
};

export default EditSubmission;