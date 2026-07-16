import React from 'react';
import PropTypes from 'prop-types';

const IconStar = ({ filled, half, rating, index }) => {
  if (filled) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1.5L11.385 6.885L17.25 7.3125L12.75 11.385L14.385 17.25L9 13.875L3.615 17.25L5.25 11.385L0.75 7.3125L6.615 6.885L9 1.5Z" fill="#FCE91B"/>
      </svg>
    );
  }

  if (half) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id={`half-clip-${rating}-${index}`}>
            <rect x="0" y="0" width="9" height="18" />
          </clipPath>
        </defs>
        <path d="M9 1.5L11.385 6.885L17.25 7.3125L12.75 11.385L14.385 17.25L9 13.875L3.615 17.25L5.25 11.385L0.75 7.3125L6.615 6.885L9 1.5Z" fill="#3A35411F"/>
        <path d="M9 1.5L11.385 6.885L17.25 7.3125L12.75 11.385L14.385 17.25L9 13.875L3.615 17.25L5.25 11.385L0.75 7.3125L6.615 6.885L9 1.5Z" fill="#FCE91B" clipPath={`url(#half-clip-${rating}-${index})`}/>
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1.5L11.385 6.885L17.25 7.3125L12.75 11.385L14.385 17.25L9 13.875L3.615 17.25L5.25 11.385L0.75 7.3125L6.615 6.885L9 1.5Z" fill="#3A35411F"/>
    </svg>
  );
};

IconStar.propTypes = {
  filled: PropTypes.bool,
  half: PropTypes.bool,
  rating: PropTypes.number,
  index: PropTypes.number
};

export default IconStar;