import React, { useState } from 'react';
import eyeOffIcon from '../assets/eye-off.png';

const InputField = ({ 
  label, 
  type = 'text', 
  required = false, 
  placeholder = '',
  value,
  onChange,
  showPasswordToggle = false,
  className = '',
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle && showPassword ? 'text' : type;

  return (
    <div className={`w-full ${className}`}>
      <label className="flex items-center gap-[4px] pr-[16px] pb-[4px]">
        <span className="font-dm-sans text-[14px] leading-[140%] tracking-[0.2px] text-text-secondary">
          {label}
        </span>
        {required && (
          <span className="font-poppins text-[16px] leading-[24px] tracking-[0.15px] text-error">
            *
          </span>
        )}
      </label>
      <div className="relative w-full">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-[48px] px-[10px] py-[4px] bg-white border border-border-input rounded-[6px] font-dm-sans text-[14px] leading-[140%] tracking-[0.2px] text-text-primary outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[10px] top-1/2 -translate-y-1/2 w-[22px] h-[19px] flex items-center justify-center"
          >
            <img
              src={eyeOffIcon}
              alt={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
              className={`w-[22px] h-[19px] ${showPassword ? 'eye-icon-visible' : 'eye-icon-hidden'}`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;