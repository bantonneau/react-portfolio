import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects';
import Resume from './components/Resume';
function App() {
  return (
    <div className='App'> 
      <Router>
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
