import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CardVideo from '../components/CardVideo';
import Footer from '../components/Footer';
import Button from '../components/Button';
import NewsletterForm from '../components/NewsletterForm';
import courses from '../data/courses';
import heroBg from '../assets/Frame 1000003861.jpg';
import bannerCta from '../assets/Banner CTA.jpg';

const Home = () => {
  useEffect(() => {
    document.title = 'Beranda videobelajar';
  }, []);
  return (
    <main className="w-full min-h-screen bg-[#FFFDF3]">
      <Navbar />

      <div className="flex flex-col gap-6 px-5 py-7 lg:px-32 lg:py-16 lg:gap-9">
        {/* Hero Section */}
        <section className="w-full min-h-[400px] rounded-[10px] relative overflow-hidden">
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="w-full flex flex-col items-center justify-center gap-6 relative z-10 px-[20px] sm:px-[40px] md:px-[60px] lg:px-[140px] lg:text-center py-8 lg:justify-start lg:pt-16 lg:pb-8">
            <div className="flex flex-col gap-3 max-w-[280px] lg:max-w-[920px]">
              <h1 className="font-poppins font-bold text-[24px] leading-[110%] text-white text-center lg:text-[clamp(24px,4vw,48px)]">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
              </h1>
              <p className="font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-white text-center lg:text-[16px]">
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
              </p>
              <Button className="w-full max-w-[280px] lg:w-auto lg:min-w-fit lg:px-8 mx-auto mt-5 lg:mt-4">
                 Temukan Video Course untuk dipelajari!
               </Button>
            </div>
          </div>
        </section>

        {/* Card Section */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <h2 className="font-poppins font-semibold text-[24px] leading-[110%] text-text-primary lg:text-[32px]">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-text-secondary lg:text-[16px]">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 overflow-x-auto lg:flex-row lg:gap-10 lg:overflow-x-visible">
            <div className="flex flex-col items-center gap-1.5 pt-3 pr-9 pb-3 whitespace-nowrap lg:pr-0">
              <span className="font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-[#F64920] lg:text-[16px]">
                Semua Kelas
              </span>
              <div className="w-[52px] h-[6px] rounded-[10px] bg-[#F64920]" />
            </div>
            <div className="flex flex-col items-center gap-1.5 pt-3 pr-9 pb-3 whitespace-nowrap lg:pr-0">
              <span className="font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-text-secondary lg:text-[16px]">
                Pemasaran
              </span>
              <div className="w-[52px] h-[6px] rounded-[10px] bg-[#F64920] opacity-0" />
            </div>
            <div className="flex flex-col items-center gap-1.5 pt-3 pr-9 pb-3 whitespace-nowrap lg:pr-0">
              <span className="font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-text-secondary lg:text-[16px]">
                Desain
              </span>
              <div className="w-[52px] h-[6px] rounded-[10px] bg-[#F64920] opacity-0" />
            </div>
            <div className="flex flex-col items-center gap-1.5 pt-3 pr-9 pb-3 whitespace-nowrap lg:pr-0">
              <span className="font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-text-secondary lg:text-[16px]">
                Pengembangan Diri
              </span>
              <div className="w-[52px] h-[6px] rounded-[10px] bg-[#F64920] opacity-0" />
            </div>
            <div className="flex flex-col items-center gap-1.5 pt-3 pr-9 pb-3 whitespace-nowrap lg:pr-0">
              <span className="font-dm-sans font-medium text-[16px] leading-[140%] tracking-[0.2px] text-text-secondary lg:text-[16px]">
                Bisnis
              </span>
              <div className="w-[52px] h-[6px] rounded-[10px] bg-[#F64920] opacity-0" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
            {courses.map((course) => (
              <CardVideo
                key={course.id}
                image={course.image}
                title={course.title}
                instructor={course.instructor}
                role={course.role}
                company={course.company}
                rating={course.rating}
                reviewCount={course.reviewCount}
                price={course.price}
                avatar={course.avatar}
              />
            ))}
          </div>
        </section>

        {/* Banner CTA */}
        <NewsletterForm bgImage={bannerCta} />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
