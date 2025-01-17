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
  const location = useLocation(); // Hook to detect route changes

  useEffect(() => {
    // Show the loader on route change
    setIsLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Loader will display for 2 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]); // Re-run effect on route change

  return (
    <div className="app">
      {/* Loader Overlay */}
      {isLoading && <Pre load={isLoading} />}

      {/* Main Content */}
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
