import React, { useState } from 'react';
import './checkbox.css'

// Define Props Interface
interface Option {
  id: string;
  label: string;
}

interface CircularCheckboxGroupProps {
  options: Option[];
  selectedValues: string;
  onChange: (selectedValues: string) => void;
  
}

const CircularCheckboxGroup: React.FC<CircularCheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
}) => {


  return (
    <div className="checkbox-group">
      {options.map((option) => (
        <label key={option.id} className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedValues.includes(option.id)}
            onChange={() => onChange(option.id)}
            className="checkbox-input"
          />
          <span className="checkbox-custom"></span>
          <span className="checkbox-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CircularCheckboxGroup;