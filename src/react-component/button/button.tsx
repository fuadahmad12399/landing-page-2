import React from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css';

interface PillButtonProps {

  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
 
}

const PillButton: React.FC<PillButtonProps> = ({ label, onClick,style }) => {
 

  

  return (
    <button
      className="pill-button"
      style={{...style,}}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default PillButton;