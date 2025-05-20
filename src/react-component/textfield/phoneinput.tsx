import React from 'react';
import './phoneinput.css'

interface CountryCodeOption {
  code: string;
  label: string;
}

interface PhoneInputProps {
  countryCodes?: CountryCodeOption[];
  selectedCountryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneNumberChange: (value: string) => void;
  placeholder?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  countryCodes = [
    { code: '+1', label: 'US' },
    { code: '+44', label: 'UK' },
    { code: '+91', label: 'India' },
    { code: '+61', label: 'Australia' },
    { code: '+60', label: 'Malaysia' },
  ],
  selectedCountryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  placeholder = 'Phone Number',
}) => {
  return (
    <div className="phone-input-container">
      <select
        className="country-code-select"
        value={selectedCountryCode}
        onChange={(e) => onCountryCodeChange(e.target.value)}
        aria-label="Country code"
      >
        {countryCodes.map((cc) => (
          <option key={cc.code} value={cc.code}>
            ({cc.code})
          </option>
        ))}
      </select>
      <input
        type="tel"
        className="phone-number-input"
        value={phoneNumber}
        onChange={(e) => onPhoneNumberChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Phone number"
      />
    </div>
  );
};

export default PhoneInput;