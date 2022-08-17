import React from 'react';
import Home from './routes/Home';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;