import React, { useState } from 'react';
import GrowthOps from '../icon/Layer_1.svg'
import Bar from '../icon/bars.svg'
import './nav_bar.css'
import MenuOverlay from './menuoverlay'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="navbar" >
       <a  target="_blank">
          <img src={GrowthOps} style={{height:'36px'}} className="logo" alt="Vite logo" onClick={ () => { navigate("/");}} />
        </a>
  
  <button
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
 
      >
       <div style={{display:'flex',alignContent:'center',gap:'2rem'}}>
         <div>MENU</div>
       <img src={Bar} style={{fontSize:'50px'}} />
        </div>
      </button>
    {isMenuOpen && (
        <MenuOverlay onClose={() => setIsMenuOpen(false)} />
      )}
  
      {/* Navigation Links */}
      {/* <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> */}
    </nav>
  );
}