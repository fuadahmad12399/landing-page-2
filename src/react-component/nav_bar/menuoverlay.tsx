import React from 'react';
import './menuoverlay.css'
import closebutton from '../icon/close.svg'

interface MenuOverlayProps {
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose }) => {
     const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  return (
    <div className="menu-overlay">
      {/* Close Button */}
      <button className="close-button" onClick={onClose}>
        CLOSE   <img src={closebutton} style={{fontSize:'50px'}} />
      </button>

      {/* Menu Items */}
      <nav className="menu-items">
        <span style={{fontSize:isDesktop ? '78px' : '48px', fontWeight:'bold'}}>SERVICES</span>
        <span style={{fontSize:isDesktop ? '78px' : '48px', fontWeight:'bold'}}>WORK</span>
        <span style={{fontSize:isDesktop ? '78px' : '48px', fontWeight:'bold'}}>INSIGHTS</span>
        <span style={{fontSize:isDesktop ? '78px' : '48px', fontWeight:'bold'}} >CAREERS</span>
        <span style={{fontSize:isDesktop ? '78px' : '48px', fontWeight:'bold'}}>CONTACT</span>
      </nav>
    </div>
  );
};

export default MenuOverlay;