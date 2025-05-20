import React from 'react';
import './textfield.css'

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  style?: React.CSSProperties;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  id = 'text-field',
  name = 'text-field',
  style,
}) => {
  return (
    <div className="text-field-container" >
      <label htmlFor={id} className="text-field-label">
        {label}
      </label>
      <input

        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-field-input"
        style={{...style,}}
      />
    </div>
  );
};

export default TextField;