import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavbarTemp from './components/Navbars/NavabrTemp/NavbarTemp';
import Home from './components/Pages/HomePage/Home';
import CertificatesDisplay from './components/Certificates/CertificatesDisplay';
// Import modals for Login and Signup


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavbarTemp />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Certificates" element={<CertificatesDisplay />} />
        </Routes>
        
       
      </div>
    </Router>
  );
};

export default App;
