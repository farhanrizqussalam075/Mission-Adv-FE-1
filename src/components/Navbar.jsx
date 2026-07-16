import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import avatarProfile from '../assets/avatar-profile.png';
import LogoutIcon from '../assets/Logout.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <nav className="w-full h-[74px] flex justify-between items-center px-[24px] py-[16px] border-t border-b border-border-light bg-white lg:h-[80px] lg:px-[120px] lg:py-[12px] lg:border-t-0 lg:border-b lg:border-[#3A35411F] relative">
      <div 
        className="w-[152px] h-[42px] flex items-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img 
          src={logo} 
          alt="Videobelajar" 
          className="w-[144.77px] h-[22.56px]"
        />
      </div>
      {!isLoginPage && !isRegisterPage && (
        <div className="hidden lg:flex items-center gap-9">
          <button className="font-['DM_Sans'] font-medium text-base leading-[140%] tracking-[0.2px] text-gray-600 cursor-pointer hover:text-primary">
            Kategori
          </button>
          <div className="relative">
            <img 
              src={avatarProfile} 
              alt="Profile Avatar" 
              className="w-[44px] h-[44px] rounded-[10px] cursor-pointer" 
              onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
            />
            {isDesktopMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <button 
                  className="block px-4 py-2 text-sm font-['DM_Sans'] font-medium text-base leading-[140%] tracking-[0.2px] text-gray-600 w-full text-left hover:bg-gray-100 border-b border-gray-200"
                  onClick={() => { navigate('/login'); setIsDesktopMenuOpen(false); }}
                >
                  Profil Saya
                </button>
                <button 
                  className="block px-4 py-2 text-sm font-['DM_Sans'] font-medium text-base leading-[140%] tracking-[0.2px] text-gray-600 w-full text-left hover:bg-gray-100 border-b border-gray-200"
                  onClick={() => { navigate('/my-classes'); setIsDesktopMenuOpen(false); }}
                >
                  Kelas Saya
                </button>
                <button 
                  className="block px-4 py-2 text-sm font-['DM_Sans'] font-medium text-base leading-[140%] tracking-[0.2px] text-gray-600 w-full text-left hover:bg-gray-100 border-b border-gray-200"
                  onClick={() => { navigate('/my-orders'); setIsDesktopMenuOpen(false); }}
                >
                  Pesanan Saya
                </button>
                <button 
                  className="flex items-center gap-2 px-4 py-2 text-sm font-['DM_Sans'] font-medium text-base leading-[140%] tracking-[0.2px] text-[#FF5C2B] w-full text-left rounded-b-md hover:bg-gray-100"
                  onClick={() => { navigate('/logout'); setIsDesktopMenuOpen(false); }}
                >
                  Keluar
                  <img src={LogoutIcon} alt="Logout" className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {!isLoginPage && !isRegisterPage && (
        <button 
          className="w-[24px] h-[24px] flex items-center justify-center lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
              fill="#4A505C"
            />
          </svg>
        </button>
      )}

      {isMobileMenuOpen && (
        <div className="absolute top-[74px] left-0 w-full bg-white shadow-lg py-2 lg:hidden z-20">
          <button 
            className="block px-4 py-2 text-base font-['DM_Sans'] font-medium leading-[140%] tracking-[0.2px] text-gray-600 w-full text-left hover:bg-gray-100 border-b border-gray-200"
            onClick={() => { navigate('/categories'); setIsMobileMenuOpen(false); }}
          >
            Kategori
          </button>
          <button 
            className="block px-4 py-2 text-base font-['DM_Sans'] font-medium leading-[140%] tracking-[0.2px] text-gray-600 w-full text-left hover:bg-gray-100 border-b border-gray-200"
            onClick={() => { navigate('/login'); setIsMobileMenuOpen(false); }}
          >
            Profil Saya
          </button>
          <button 
            className="block px-4 py-2 text-base font-['DM_Sans'] font-medium leading-[140%] tracking-[0.2px] text-gray-600 w-full text-left hover:bg-gray-100 border-b border-gray-200"
            onClick={() => { navigate('/my-classes'); setIsMobileMenuOpen(false); }}
          >
            Kelas Saya
          </button>
          <button 
            className="block px-4 py-2 text-base font-['DM_Sans'] font-medium leading-[140%] tracking-[0.2px] text-gray-600 w-full text-left hover:bg-gray-100 border-b border-gray-200"
            onClick={() => { navigate('/my-orders'); setIsMobileMenuOpen(false); }}
          >
            Pesanan Saya
          </button>
          <button 
            className="flex items-center gap-2 px-4 py-2 text-base font-['DM_Sans'] font-medium leading-[140%] tracking-[0.2px] text-[#FF5C2B] w-full text-left hover:bg-gray-100"
            onClick={() => { navigate('/logout'); setIsMobileMenuOpen(false); }}
          >
            Keluar
            <img src={LogoutIcon} alt="Logout" className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;