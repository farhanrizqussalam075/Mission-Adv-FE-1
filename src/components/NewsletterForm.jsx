import React from 'react';
import PropTypes from 'prop-types';

const NewsletterForm = ({ bgImage }) => {
  return (
    <section className="w-full h-[400px] rounded-[4px] relative overflow-hidden flex items-center justify-center lg:min-h-[400px]">
      <img 
        src={bgImage} 
        alt="Newsletter Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="w-full max-w-xs flex flex-col items-center gap-10 relative z-10 lg:max-w-xl">
        <div className="flex flex-col items-center gap-1">
          <span className="font-dm-sans font-medium text-[16px] leading-[140%] tracking-[0.2px] text-[#C1C2C4] lg:text-[18px]">
            NEWSLETTER
          </span>
          <div className="flex flex-col items-center gap-2.5">
            <h2 className="font-poppins font-semibold text-[24px] leading-[110%] text-white text-center lg:text-[32px]">
              Mau Belajar Lebih Banyak?
            </h2>
            <p className="font-dm-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-[#F4F5FA] text-center lg:text-[16px]">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full lg:flex-row lg:gap-4 lg:justify-center">
          <div className="flex flex-col gap-4 w-full lg:hidden">
            <input
              type="email"
              placeholder="Masukkan Emailmu"
              className="w-full h-10 rounded-lg bg-white px-3 py-2.5 font-dm-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-secondary placeholder-[#333333AD] text-center"
            />
            <button className="w-full h-10 rounded-lg bg-[#FFBD3A] text-white font-dm-sans font-bold text-sm leading-[140%] tracking-[0.2px] px-6 py-2.5">
              Subscribe
            </button>
          </div>
          <div className="hidden lg:block relative w-[525px] h-[58px] rounded-[10px] bg-white flex items-center justify-between pl-8 pr-2 py-2 gap-5">
            <input
              type="email"
              placeholder="Masukkan Emailmu"
              className="w-[333px] h-full bg-transparent outline-none font-dm-sans font-normal text-[16px] leading-[140%] tracking-[0.2px] text-text-secondary placeholder-[#333333AD]"
            />
            <button className="flex-shrink-0 w-[133px] h-[42px] rounded-[10px] bg-[#FFBD3A] text-white font-dm-sans font-bold text-[16px] leading-[140%] tracking-[0.2px] px-[26px] py-[10px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

NewsletterForm.propTypes = {
  bgImage: PropTypes.string.isRequired
};

export default NewsletterForm;