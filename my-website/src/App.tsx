import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
