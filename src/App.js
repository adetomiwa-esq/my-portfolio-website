import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import AboutMe from './components/Pages/AboutMe';
import Porfolio from './components/Pages/Porfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/my-portfolio-website' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />}/>
          <Route path='/portfolio' element={<Porfolio />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
