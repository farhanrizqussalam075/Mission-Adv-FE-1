import React, { useEffect, useState, useRef, useCallback } from 'react';
import Navbar from '../components/Navbar';
import CardVideo from '../components/CardVideo';
import Footer from '../components/Footer';
import Button from '../components/Button';
import NewsletterForm from '../components/NewsletterForm';
import CourseModal from '../components/CourseModal';
import CategoryModal from '../components/CategoryModal';
import ConfirmationModal from '../components/ConfirmationModal';
import useCourses from '../hooks/useCourses';
import useCategories from '../hooks/useCategories';
import heroBg from '../assets/Frame 1000003861.jpg';
import bannerCta from '../assets/Banner CTA.jpg';

const Home = () => {
  const {
    courses,
    loading,
    error,
    createCourse,
    editCourse,
    removeCourse,
  } = useCourses();

  const {
    categories,
    loading: catLoading,
    error: catError,
    createCategory,
    editCategory,
    removeCategory,
  } = useCategories();

  const [selectedCategory, setSelectedCategory] = useState("Semua Kelas");
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const courseToDelete = useRef(null);
  const categoryToDelete = useRef(null);

  useEffect(() => {
    document.title = 'Beranda videobelajar';
  }, []);

  const handleAddCourse = useCallback(async (newCourse) => {
    try {
      await createCourse(newCourse);
    } catch (err) {
      console.error('Failed to add course:', err);
    }
  }, [createCourse]);

  const handleUpdateCourse = useCallback(async (updatedCourse) => {
    try {
      await editCourse(updatedCourse.id, updatedCourse);
    } catch (err) {
      console.error('Failed to update course:', err);
    }
  }, [editCourse]);

  const handleDeleteCourse = useCallback(async (id) => {
    try {
      await removeCourse(id);
    } catch (err) {
      console.error('Failed to delete course:', err);
    } finally {
      setShowConfirmModal(false);
      setSelectedCategory("Semua Kelas");
    }
  }, [removeCourse]);

  const handleAddCategory = async (newCategory) => {
    try {
      await createCategory(newCategory);
    } catch (err) {
      console.error('Failed to add category:', err);
    }
  };

  const handleUpdateCategory = async (updatedCategory) => {
    try {
      await editCategory(updatedCategory.id, updatedCategory);
    } catch (err) {
      console.error('Failed to update category:', err);
    }
  };

  const handleDeleteCategory = async (id) => {
    const categoryNameToDelete = categories.find(cat => cat.id === id).name;
    try {
      await removeCategory(id);
      if (selectedCategory === categoryNameToDelete) {
        setSelectedCategory("Semua Kelas");
      }
    } catch (err) {
      console.error('Failed to delete category:', err);
    } finally {
      setShowConfirmModal(false);
    }
  };

  const filteredCourses = selectedCategory === "Semua Kelas"
    ? courses
    : courses.filter(course => course.category === selectedCategory);

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

          {/* Loading / Error state */}
          {loading && <p className="text-gray-500">Memuat data course...</p>}
          {error && <p className="text-red-500">Error course: {error}</p>}
          {catLoading && <p className="text-gray-500">Memuat data kategori...</p>}
          {catError && <p className="text-red-500">Error kategori: {catError}</p>}

          {/* Add Course and Category Buttons */}
          <div className="flex gap-4 mt-4">
            <Button onClick={() => { setEditingCourse(null); setShowCourseModal(true); }} className="bg-green-500 text-white px-4 py-2 rounded-md">Tambah Course</Button>
            <Button onClick={() => { setEditingCategory(null); setShowCategoryModal(true); }} className="bg-purple-500 text-white px-4 py-2 rounded-md">Tambah Kategori</Button>
          </div>

          {/* Tabs */}
          {(() => {
            const allCategories = [{ id: 'all', name: 'Semua Kelas' }, ...categories];
            return (
              <div className="flex gap-0 overflow-x-auto lg:flex-row lg:gap-10 lg:overflow-x-visible">
                {allCategories?.map((category, index) => {
                  const isAll = category.name === 'Semua Kelas';
                  return (
                    <div 
                      key={index} 
                      className="flex flex-col items-center gap-1.5 pt-3 pr-9 pb-3 whitespace-nowrap lg:pr-0 cursor-pointer group"
                    >
                      <span 
                        className={`font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] ${selectedCategory === category.name ? 'text-[#F64920]' : 'text-text-secondary'} lg:text-[16px]`}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        {category.name}
                      </span>
                      <div className={`w-[52px] h-[6px] rounded-[10px] bg-[#F64920] ${selectedCategory === category.name ? 'opacity-100' : 'opacity-0'}`} />
                      {!isAll && (
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <button 
                            onClick={() => { setEditingCategory(category); setShowCategoryModal(true); }}
                            className="text-blue-500 text-xs"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => { categoryToDelete.current = category.id; setShowConfirmModal(true); }}
                            className="text-red-500 text-xs"
                          >
                            Hapus
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {/* Cards Grid */}
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
            {filteredCourses?.map((course) => (
              <CardVideo
                key={course.id}
                id={course.id}
                image={course.image}
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                role={course.role}
                company={course.company}
                rating={course.rating}
                reviewCount={course.reviewCount}
                price={course.price}
                avatar={course.avatar}
                category={course.category}
                onEdit={() => { setEditingCourse(course); setShowCourseModal(true); }}
                onDelete={() => { courseToDelete.current = course.id; setShowConfirmModal(true); }}
              />
            ))}
          </div>
        </section>

        {/* Banner CTA */}
        <NewsletterForm bgImage={bannerCta} />
      </div>

      <Footer />

      {/* Modals */}
      <CourseModal
        key={editingCourse ? editingCourse.id : 'new-course'}
        show={showCourseModal}
        onClose={() => { setShowCourseModal(false); setEditingCourse(null); }}
        onSave={editingCourse ? handleUpdateCourse : handleAddCourse}
        course={editingCourse}
        categories={categories}
      />

      <CategoryModal
        key={editingCategory ? editingCategory.id : 'new-category'}
        show={showCategoryModal}
        onClose={() => { setShowCategoryModal(false); setEditingCategory(null); }}
        onSave={editingCategory ? handleUpdateCategory : handleAddCategory}
        category={editingCategory}
      />

      <ConfirmationModal
        show={showConfirmModal}
        onClose={() => {
          setShowConfirmModal(false);
          courseToDelete.current = null;
          categoryToDelete.current = null;
        }}
        onConfirm={async () => {
          const currentCourseId = courseToDelete.current;
          const currentCategoryId = categoryToDelete.current;

          // Reset UI state terlebih dahulu agar modal langsung menghilang tanpa flashing
          setShowConfirmModal(false);
          courseToDelete.current = null;
          categoryToDelete.current = null;

          // Baru jalankan fungsi hapus setelahnya
          if (currentCourseId) {
            await handleDeleteCourse(currentCourseId);
          } else if (currentCategoryId) {
            await handleDeleteCategory(currentCategoryId);
          }
        }}
        message={courseToDelete.current ? "Apakah Anda yakin ingin menghapus course ini?" : "Apakah Anda yakin ingin menghapus kategori ini? Course yang terkait akan dipindahkan ke \"Semua Kelas\"."}
      />
    </main>
  );
};

export default Home;