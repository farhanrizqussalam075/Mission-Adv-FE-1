import React from 'react';

const PhoneInput = ({
  label,
  required = false,
  value,
  onChange,
  className = '',
  ...props
}) => {
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
      <div className="flex gap-[12px]">
        {/* Country Code Selector */}
        <div className="w-[122px] h-[48px] border border-border-input rounded-[6px] flex items-center overflow-hidden">
          <div className="w-[44px] h-full bg-[#F4F5FA] border-r border-border-input flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" rx="2" fill="#F4F5FA"/>
              <rect x="2" y="2" width="20" height="20" rx="2" fill="white"/>
              <rect x="2" y="2" width="20" height="20" rx="2" stroke="#3A35411F" strokeWidth="1"/>
              <rect x="2" y="2" width="20" height="10" fill="#E12237"/>
            </svg>
          </div>
          <div className="flex-1 h-full px-[10px] py-[4px] flex items-center gap-[8px]">
            <span className="font-dm-sans text-[14px] leading-[140%] tracking-[0.2px] text-text-primary">
              +62
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                fill="#3A354161"
              />
            </svg>
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="flex-1 h-[48px] border border-border-input rounded-[6px] overflow-hidden">
          <input
            type="tel"
            value={value}
            onChange={onChange}

            className="w-full h-full px-[10px] py-[4px] bg-white font-dm-sans text-[14px] leading-[140%] tracking-[0.2px] text-text-primary outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;