// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Pages/HomePage/Home';
import CertificatesDisplay from './components/Certificates/CertificatesDisplay';
import ProtectedRoute from '././components/security/ProtectedRoute'; // Import the ProtectedRoute component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/Home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Certificates"
            element={
              <ProtectedRoute>
                <CertificatesDisplay />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
