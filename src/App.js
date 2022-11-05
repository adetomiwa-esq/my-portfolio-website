import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/my-portfolio-website' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;