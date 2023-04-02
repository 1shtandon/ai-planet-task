import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/Navbar/navbar.component';
import Home from './routes/Home/home.component';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/upload" element=
          <h1>Upload</h1>
        > </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/upload" element={<h1>Upload</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
