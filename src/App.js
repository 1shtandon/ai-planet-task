import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/Navbar/navbar.component';
import Home from './routes/Home/home.component';
import Submission from './routes/Submission/submission.component';
import UploadSubmissionForm from './components/upload-submission-form/upload-form.component';
import EditSubmission from './routes/Edit-submission/edit-submission.component';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/upload' element={<UploadSubmissionForm />} />
          <Route path='/edit/*' element={<EditSubmission />} />
          <Route path='/submission/*' element={<Submission />} />
          <Route path='*' element={404} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
