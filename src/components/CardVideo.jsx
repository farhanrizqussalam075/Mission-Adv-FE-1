import React from 'react';
import PropTypes from 'prop-types';
import IconStar from './IconStar';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<IconStar key={i} filled />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<IconStar key={i} half rating={rating} index={i} />);
    } else {
      stars.push(<IconStar key={i} />);
    }
  }

  return <div className="flex gap-[2px]">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};

const CardVideo = ({ 
  image, 
  title, 
  description, 
  instructor, 
  role, 
  company, 
  rating, 
  reviewCount, 
  price,
  avatar,
  onEdit,
  onDelete
}) => {
  return (
    <div className="w-full rounded-[10px] border border-[#3A35411F] p-[16px] md:p-[20px] bg-white flex flex-col md:gap-[16px]">
      <div className="flex flex-row md:flex-col gap-[16px]">
        <img 
          src={image} 
          alt={title} 
          className="w-[82px] h-[82px] rounded-[10px] object-cover shrink-0 md:w-full md:h-[193px] md:rounded-[10px]"
        />
        <div className="flex flex-col gap-[8px] md:gap-[8px] flex-1 min-w-0 justify-between md:px-0">
          <div className="flex flex-col gap-[4px] md:h-[74px] md:gap-[8px]">
            <h3 className="font-poppins font-semibold text-[16px] leading-[120%] text-text-primary md:text-[18px]">
              {title}
            </h3>
            <p className="hidden md:block font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-text-secondary line-clamp-2 md:text-[16px]">
              {description}
            </p>
          </div>
          
          <div className="flex items-center gap-[8px] md:mt-auto md:gap-[10px]">
            <img 
              src={avatar} 
              alt={instructor} 
              className="w-[36px] h-[36px] rounded-[10px] object-cover shrink-0 md:w-[40px] md:h-[40px]"
            />
            <div className="flex flex-col">
              <span className="font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-text-primary md:text-[16px]">
                {instructor}
              </span>
              <div className="flex items-center gap-[4px] flex-wrap">
                {role && (
                  <span className="font-dm-sans font-normal text-[12px] leading-[140%] tracking-[0.2px] text-text-secondary md:text-[14px]">
                    {role}
                  </span>
                )}
                {role && company && (
                  <span className="hidden md:inline font-dm-sans font-normal text-[12px] leading-[140%] tracking-[0.2px] text-text-secondary md:text-[14px]">di</span>
                )}
                {!role && company && (
                  <span className="hidden md:inline font-dm-sans font-normal text-[12px] leading-[140%] tracking-[0.2px] text-text-secondary md:text-[14px]">di</span>
                )}
                {company && (
                  <span className="hidden md:inline font-dm-sans font-bold text-[12px] leading-[140%] tracking-[0.2px] text-text-secondary md:text-[14px]">
                    {company}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 md:mt-0">
        <div className="flex items-center gap-[4px]">
          <StarRating rating={rating} />
          <span className="font-dm-sans font-medium text-[12px] leading-[140%] tracking-[0.2px] text-text-secondary underline">
            {rating} ({reviewCount})
          </span>
        </div>
        <span className="font-poppins font-semibold text-[20px] leading-[120%] text-primary">
            {price}
          </span>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onEdit} className="text-blue-500 text-sm">Edit</button>
        <button onClick={onDelete} className="text-red-500 text-sm">Hapus</button>
      </div>
    </div>
  );
};

CardVideo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardVideo;
