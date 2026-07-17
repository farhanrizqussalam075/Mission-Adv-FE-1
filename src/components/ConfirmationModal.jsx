import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ConfirmationModal = ({ show, onClose, onConfirm, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Konfirmasi</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end gap-2">
          <Button type="button" onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Batal</Button>
          <Button type="button" onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-md">Hapus</Button>
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ConfirmationModal;