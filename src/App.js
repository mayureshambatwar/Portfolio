import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Project from './routes/Project';
  import { Routes, Route, useLocation } from 'react-router-dom';
import Pre from './Components/Pre';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]); 

  return (
    <div className="app">
      {isLoading && <Pre load={isLoading} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
