import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  variant = 'contained', 
  color = 'primary',
  className = '',
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyle = 'flex items-center justify-center w-full h-[40px] lg:h-[42px] rounded-[10px] font-dm-sans font-normal lg:font-bold text-[12px] lg:text-[16px] leading-[140%] tracking-[0.2px] px-[10px] lg:px-[26px] py-[10px] transition-all duration-200';
  
  const variants = {
    contained: 'bg-primary text-white border-none hover:opacity-90',
    shadow: 'bg-primary-light text-primary border-none hover:bg-primary hover:text-white',
    outlined: 'bg-white text-text-muted border border-border-light hover:bg-gray-50',
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['contained', 'shadow', 'outlined']),
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
