import React from 'react';
import './transparentcheckbox.css'

interface TransparentCheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  name?: string;
  className?: string;
}

const TransparentCheckbox: React.FC<TransparentCheckboxProps> = ({
  label,
  checked,
  onChange,
  id = 'checkbox',
  name = 'checkbox',
  className = '',
}) => {
  return (
    <label htmlFor={id} className={`checkbox-label ${className}`}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="checkbox-input-transparent"
        aria-label={label}
      />
      <span className="checkbox-custom-transparent"></span>
      {label}
    </label>
  );
};

export default TransparentCheckbox;