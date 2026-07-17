import axiosInstance from './axiosInstance';

const API_ENDPOINT = '/courses';

export const getCourses = async () => {
  const response = await axiosInstance.get(API_ENDPOINT);
  return response.data;
};

export const getCourseById = async (id) => {
  const response = await axiosInstance.get(`${API_ENDPOINT}/${id}`);
  return response.data;
};

export const addCourse = async (courseData) => {
  const response = await axiosInstance.post(API_ENDPOINT, courseData);
  return response.data;
};

export const updateCourse = async (id, courseData) => {
  const response = await axiosInstance.put(`${API_ENDPOINT}/${id}`, courseData);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axiosInstance.delete(`${API_ENDPOINT}/${id}`);
  return response.data;
};