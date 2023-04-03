import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/Navbar/navbar.component';
import Home from './routes/Home/home.component';
import Submission from './routes/Submission/submission.component';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/upload' element={<h1>upload</h1>} />
          <Route path='/submission/*' element={<Submission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
