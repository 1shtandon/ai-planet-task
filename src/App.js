import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/Navbar/navbar.component';
import Home from './routes/Home/home.component';
import Submission from './routes/Submission/submission.component';
import UploadSubmissionForm from './components/upload-submission-form/upload-form.component';
import EditSubmission from './routes/Edit-submission/edit-submission.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { rehydrateSubmissionListAction } from './store/Submission-List/submission-list.action';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "AI Planet"
    const submissionList = JSON.parse(localStorage.getItem('submissionList'));
    if (submissionList) {
      console.log(submissionList);
      dispatch(rehydrateSubmissionListAction(submissionList));
    }
  })

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
