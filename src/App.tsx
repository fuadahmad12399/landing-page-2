// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage'; 
import ContactUs from './pages/contactus';// Import your homepage

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contactus" element={<ContactUs />} /> {/* Root route */}
      </Routes>
    </Router>
  );
};

export default App;