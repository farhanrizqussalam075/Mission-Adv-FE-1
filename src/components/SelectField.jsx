import React, { useState, useRef, useEffect } from 'react';

const SelectField = ({
  label,
  required = false,
  options = [],
  value,
  onChange,
  placeholder = 'Pilih...',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`w-full ${className}`} ref={dropdownRef}>
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
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-[48px] px-[10px] py-[4px] bg-white border border-border-input rounded-[6px] flex items-center justify-between cursor-pointer transition-all"
        >
          <span className={`font-dm-sans text-[14px] leading-[140%] tracking-[0.2px] ${
            value ? 'text-text-primary' : 'text-text-secondary'
          }`}>
            {value || placeholder}
          </span>
          <svg
            className={`w-[24px] h-[24px] transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
              fill="#3A354161"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-[4px] bg-white border border-border-input rounded-[6px] shadow-lg overflow-hidden">
            {options.length > 0 ? (
              options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full px-[10px] py-[10px] text-left font-dm-sans text-[14px] leading-[140%] tracking-[0.2px] transition-colors hover:bg-gray-50 ${
                    value === option
                      ? 'text-primary bg-primary-light/30'
                      : 'text-text-primary'
                  }`}
                >
                  {option}
                </button>
              ))
            ) : (
              <div className="px-[10px] py-[10px] font-dm-sans text-[14px] leading-[140%] tracking-[0.2px] text-text-secondary">
                Tidak ada pilihan
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectField;