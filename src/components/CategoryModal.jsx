import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const CategoryModal = ({ show, onClose, onSave, category }) => {
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    if (category) {
      setCategoryName(category.name);
    } else {
      setCategoryName('');
    }
  }, [category]);

  const handleClose = () => {
    setCategoryName('');
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      onSave({ ...category, name: categoryName.trim() });
      handleClose();
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{category ? 'Edit Kategori' : 'Tambah Kategori'}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Kategori</label>
            <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button type="button" onClick={handleClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Batal</Button>
            <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Simpan</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

CategoryModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  category: PropTypes.object,
};

export default CategoryModal;