import React, { useState, useEffect, useRef } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Button from './Button';

const initialState = {
  id: null,
  title: '',
  description: '',
  category: '',
  instructor: '',
  price: '',
  image: '',
  rating: '',
  avatar: '',
  role: '',
  company: '',
  reviewCount: '',
};

const CourseModal = ({ show, onClose, onSave, course, categories }) => {
  const [formData, setFormData] = useState({...initialState});

  const [imagePreview, setImagePreview] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const imgRef = useRef(null);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const [imageToCrop, setImageToCrop] = useState(null);
  const [imageType, setImageType] = useState(null); // 'image' or 'avatar'

  useEffect(() => {
    if (course) {
      setFormData(course);
      setImagePreview(course.image);
      setAvatarPreview(course.avatar);
    } else {
      setFormData({
        id: null,
        title: '',
        description: '',
        category: '',
        instructor: '',
        price: '',
      image: '',
      rating: '',
      avatar: '',
      role: '',
      company: '',
      reviewCount: '',
      });
      setImagePreview(null);
      setAvatarPreview(null);
    }
  }, [course, categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageToCrop(reader.result);
        setImageType(name);
        setCrop(undefined); // Clear crop state
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: ''
      }));
      if (name === 'image') {
        setImagePreview(null);
      } else if (name === 'avatar') {
        setAvatarPreview(null);
      }
      setImageToCrop(null);
      setImageType(null);
    }
  };

  const MAX_IMAGE_DIMENSION = 800;
  const COMPRESS_QUALITY = 0.7;
  const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB

  const getCroppedImage = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    let targetWidth = crop.width;
    let targetHeight = crop.height;

    // Resize if too large
    if (targetWidth > MAX_IMAGE_DIMENSION || targetHeight > MAX_IMAGE_DIMENSION) {
      const ratio = Math.min(MAX_IMAGE_DIMENSION / targetWidth, MAX_IMAGE_DIMENSION / targetHeight);
      targetWidth = Math.round(targetWidth * ratio);
      targetHeight = Math.round(targetHeight * ratio);
    }

    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      targetWidth,
      targetHeight
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }

        // Reject if still too big
        if (blob.size > MAX_FILE_SIZE) {
          reject(new Error('File terlalu besar. Pilih gambar dengan resolusi lebih kecil.'));
          return;
        }

        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(blob);
      }, 'image/jpeg', COMPRESS_QUALITY);
    });
  };

  const onImageLoad = (e) => {
    if (imageType === 'image') {
      const { width, height } = e.currentTarget;
      setCrop(centerCrop(makeAspectCrop({ unit: '%', width: 90 }, 16 / 9, width, height), width, height));
    } else if (imageType === 'avatar') {
      const { width, height } = e.currentTarget;
      setCrop(centerCrop(makeAspectCrop({ unit: '%', width: 90 }, 1, width, height), width, height));
    }
  };

  const handleCropComplete = (crop) => {
    setCompletedCrop(crop);
  };

  const handleCrop = async () => {
    if (imgRef.current && completedCrop) {
      const croppedImageUrl = await getCroppedImage(imgRef.current, completedCrop, 'newImage.jpeg');
      setFormData(prev => ({
        ...prev,
        [imageType]: croppedImageUrl
      }));
      if (imageType === 'image') {
        setImagePreview(croppedImageUrl);
      } else if (imageType === 'avatar') {
        setAvatarPreview(croppedImageUrl);
      }
      setImageToCrop(null);
      setImageType(null);
      setCompletedCrop(null);
      setCrop(undefined);
    }
  };

  const handleClose = () => {
    setFormData({...initialState});
    setImagePreview(null);
    setAvatarPreview(null);
    setImageToCrop(null);
    setImageType(null);
    setCrop(undefined);
    setCompletedCrop(null);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    handleClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{course ? 'Edit Course' : 'Tambah Course'}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {imageToCrop ? (
            <div className="flex flex-col items-center">
              <ReactCrop crop={crop} onChange={(_, percentCrop) => setCrop(percentCrop)} onComplete={handleCropComplete} aspect={imageType === 'image' ? 16 / 9 : 1}>
                <img ref={imgRef} src={imageToCrop} onLoad={onImageLoad} alt="Crop" />
              </ReactCrop>
              <Button onClick={handleCrop} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Crop Image</Button>
              <Button onClick={() => { setImageToCrop(null); setImageType(null); setCrop(undefined); setCompletedCrop(null); }} className="mt-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</Button>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Judul</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="3" required></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Kategori</label>
                <select name="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                  <option value="">Pilih Kategori</option>
                  {categories.filter(cat => cat.name !== "Semua Kelas").map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Instruktur</label>
                <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Harga</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gambar Course</label>
                <input type="file" name="image" onChange={handleFileChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" accept="image/*" />
                {imagePreview && <img src={imagePreview} alt="Course Preview" className="mt-2 h-20 w-20 object-cover rounded-md" />}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Avatar Instruktur</label>
                <input type="file" name="avatar" onChange={handleFileChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" accept="image/*" />
                {avatarPreview && <img src={avatarPreview} alt="Avatar Preview" className="mt-2 h-20 w-20 object-cover rounded-full" />}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating (0-5)</label>
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} min="0" max="5" step="0.1" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role Instruktur</label>
                <input type="text" name="role" value={formData.role} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Perusahaan Instruktur</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Jumlah Review</label>
                <input type="number" name="reviewCount" value={formData.reviewCount} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button type="button" onClick={handleClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Batal</Button>
                <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Simpan</Button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
