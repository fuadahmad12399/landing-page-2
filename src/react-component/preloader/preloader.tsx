// Preloader.jsx
import React, { useEffect, useState } from 'react';
import './Preloader.css'; // We'll create this next
import Preload from '../icon/Desktop.svg'

const Preloader = ({ isActive }) => {
  
 const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  return (
    <div className={`preloader ${isActive ? 'active' : 'hide'}`}>
      <div className="loader-container">
 
<img src={Preload} style={{width: isDesktop ? '1366px' : '384px', height:'768px'}} />
  
   
      </div>
    </div>
  );
};

export default Preloader;