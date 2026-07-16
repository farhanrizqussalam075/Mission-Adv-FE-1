import React from 'react';
import logo from '../assets/logo.png';
import arrowRight from '../assets/arrow-right.png';
import group3592 from '../assets/Group 3592.png';
import group3591 from '../assets/Group 3591.png';
import group3589 from '../assets/Group 3589.png';
import group3593 from '../assets/Group 3593.png';

const Footer = () => {
  return (
    <footer className="w-full h-[424px] flex flex-col gap-[16px] p-[20px] bg-white border-t border-[#3A35411F] lg:h-auto lg:py-[64px] lg:px-[120px]">
      <div className="flex flex-col gap-[16px]"> {/* Main container, now always flex-col */}
        <div className="flex flex-col gap-[16px] lg:flex lg:flex-row lg:justify-between lg:items-start"> {/* New wrapper for top row */}
          {/* Logo & Info */}
          <div className="flex flex-col gap-[16px]"> {/* Removed lg:col-span-1 */}
            <div className="w-[170px] h-[36px] flex items-center">
              <img 
                src={logo} 
                alt="Videobelajar" 
                className="w-[161.61px] h-[25.18px] lg:w-[180px] lg:h-[28px]"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className="font-open-sans font-bold text-[14px] leading-[140%] tracking-[0.2px] text-text-primary">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </p>
              <p className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary">
                +62-877-7123-1234
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-[16px] lg:flex-row lg:gap-[48px]"> {/* Grouping and applying desktop flex/gap, removed lg:col-span-3 */}
            {/* Kategori */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between lg:justify-start lg:gap-[10px]">
                <span className="font-open-sans font-bold text-[16px] leading-[140%] tracking-[0.2px] text-text-primary lg:hidden">
                  Perusahaan
                </span>
                <span className="font-open-sans font-bold text-[16px] leading-[140%] tracking-[0.2px] text-text-primary hidden lg:block">
                  Kategori
                </span>
                <div className="relative w-[24px] h-[24px] lg:hidden">
                  <img 
                    src={arrowRight} 
                    alt="arrow" 
                    className="absolute"
                    style={{ width: '7.41px', height: '12px', top: '6px', left: '8.59px' }}
                  />
                </div>
              </div>
              <ul className="flex flex-col gap-[8px] hidden lg:flex">
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Digital & Teknologi</a></li>
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Pemasaran</a></li>
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Manajemen Bisnis</a></li>
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Pengembangan Diri</a></li>
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Desain</a></li>
              </ul>
            </div>
    
            {/* Perusahaan */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between lg:justify-start lg:gap-[10px]">
                <span className="font-open-sans font-bold text-[16px] leading-[140%] tracking-[0.2px] text-text-primary">
                  Perusahaan
                </span>
                <div className="relative w-[24px] h-[24px] lg:hidden">
                  <img 
                    src={arrowRight} 
                    alt="arrow" 
                    className="absolute"
                    style={{ width: '7.41px', height: '12px', top: '6px', left: '8.59px' }}
                  />
                </div>
              </div>
              <ul className="flex flex-col gap-[8px] hidden lg:flex">
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Tentang Kami</a></li>
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">FAQ</a></li>
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Kebijakan Privasi</a></li>
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Ketentuan Layanan</a></li>
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Bantuan</a></li>
              </ul>
            </div>
    
            {/* Komunitas */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between lg:justify-start lg:gap-[10px]">
                <span className="font-open-sans font-bold text-[16px] leading-[140%] tracking-[0.2px] text-text-primary">
                  Komunitas
                </span>
                <div className="relative w-[24px] h-[24px] lg:hidden">
                  <img 
                    src={arrowRight} 
                    alt="arrow" 
                    className="absolute"
                    style={{ width: '7.41px', height: '12px', top: '6px', left: '8.59px' }}
                  />
                </div>
              </div>
              <ul className="flex flex-col gap-[8px] hidden lg:flex">
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Tips Sukses</a></li>
                <li><a href="/" className="font-open-sans font-normal text-[14px] leading-[140%] tracking-[0.2px] text-text-primary hover:text-blue-600">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] border-t border-[#3A35411F] lg:col-span-4 lg:mt-[32px]" />

        {/* Social Media & Copyright */}
        <div className="flex flex-col gap-[12px] lg:flex-row lg:justify-between lg:items-center lg:col-span-4">
          <p className="font-dm-sans font-medium text-[16px] leading-[140%] tracking-[0.2px] text-text-secondary order-last lg:order-first">
            @2023 Gerobak Sayur All Rights Reserved.
          </p>
          <div className="flex gap-[15px] order-first lg:order-last">
            <img src={group3592} alt="social" className="w-[35px] h-[35px]" />
            <img src={group3591} alt="social" className="w-[35px] h-[35px]" />
            <img src={group3589} alt="social" className="w-[35px] h-[35px]" />
            <img src={group3593} alt="social" className="w-[35px] h-[35px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;