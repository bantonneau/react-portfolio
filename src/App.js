import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='App'> 
      <Router>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
