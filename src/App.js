import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import AboutMe from './components/Pages/AboutMe';
import Porfolio from './components/Pages/Porfolio';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/my-portfolio-website' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />}/>
          <Route path='/portfolio' element={<Porfolio />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
