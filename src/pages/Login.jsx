import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InputField from '../components/InputField';
import Button from '../components/Button';
import GoogleLoginButton from '../components/GoogleLoginButton';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login videobelajar';
  }, []);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Logika login akan diimplementasikan
    console.log('Login data:', formData);
  };

  const handleGoogleLogin = () => {
    // Logika Google login akan diimplementasikan
    console.log('Google login');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF3]">
      <Navbar />
      
      <div className="flex justify-center px-5 py-5 lg:px-32 lg:py-16 lg:gap-9">
        <div className="w-full max-w-[320px] lg:max-w-[590px]">
          {/* Card Container */}
          <div className="w-full border border-border-light rounded-sm p-5 bg-white lg:p-9 lg:border-[#F1F1F1]">
            {/* Description */}
            <div className="w-full mb-5">
              <h1 className="font-poppins font-semibold text-[24px] leading-[110%] text-text-primary text-center lg:text-[32px]">
                Masuk ke Akun
              </h1>
              <p className="font-dm-sans text-sm leading-[140%] tracking-[0.2px] text-text-secondary text-center mt-2.5 lg:text-base">
                Yuk, lanjutin belajarmu di videobelajar.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="w-full flex flex-col gap-5 lg:gap-6">
              {/* Email Field */}
              <InputField
                label="E-Mail"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              {/* Password Field */}
              <InputField
                label="Kata Sandi"
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                showPasswordToggle
              />

              {/* Lupa Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-text-secondary hover:text-primary transition-colors"
                >
                  Lupa Password?
                </button>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4">
                <Button type="submit" variant="contained">
                  Masuk
                </Button>
                <Button
                  type="button"
                  variant="shadow"
                  onClick={() => navigate('/register')}
                >
                  Daftar
                </Button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2.5">
                <div className="flex-1 h-[1px] bg-border-light"></div>
                <span className="font-dm-sans text-sm leading-[140%] tracking-[0.2px] text-text-muted px-2 bg-white">
                  atau
                </span>
                <div className="flex-1 h-px bg-border-light"></div>
              </div>

              {/* Google Login */}
              <GoogleLoginButton onClick={handleGoogleLogin} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;