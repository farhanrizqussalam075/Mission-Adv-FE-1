import axiosInstance from './axiosInstance';

const API_ENDPOINT = '/categories';

export const getCategories = async () => {
  const response = await axiosInstance.get(API_ENDPOINT);
  return response.data;
};

export const getCategoryById = async (id) => {
  const response = await axiosInstance.get(`${API_ENDPOINT}/${id}`);
  return response.data;
};

export const addCategory = async (categoryData) => {
  const response = await axiosInstance.post(API_ENDPOINT, categoryData);
  return response.data;
};

export const updateCategory = async (id, categoryData) => {
  const response = await axiosInstance.put(`${API_ENDPOINT}/${id}`, categoryData);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await axiosInstance.delete(`${API_ENDPOINT}/${id}`);
  return response.data;
};