import React from 'react';
import googleIcon from '../assets/logos_google-icon.png';

const GoogleLoginButton = ({ onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-[34px] rounded-[10px] border border-border-light bg-white flex items-center justify-center gap-[8px] hover:bg-gray-50 transition-all"
    >
      <img 
        src={googleIcon} 
        alt="Google" 
        className="w-[20px] object-contain"
      />
      <span className="font-dm-sans font-bold text-[14px] leading-[140%] tracking-[0.2px] text-text-muted">
        {label || 'Masuk dengan Google'}
      </span>
    </button>
  );
};

export default GoogleLoginButton;
