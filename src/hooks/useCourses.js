import { useState, useEffect, useCallback } from 'react';
import {
  getCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse,
} from '../services/api/courseService';

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const fetchCourseById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCourseById(id);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createCourse = useCallback(async (courseData) => {
    setLoading(true);
    setError(null);
    try {
      const newCourse = await addCourse(courseData);
      setCourses((prev) => [newCourse, ...prev]);
      return newCourse;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const editCourse = useCallback(async (id, courseData) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await updateCourse(id, courseData);
      setCourses((prev) => prev.map((c) => (c.id === id ? updated : c)));
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeCourse = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteCourse(id);
      setCourses((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    courses,
    loading,
    error,
    fetchCourses,
    fetchCourseById,
    createCourse,
    editCourse,
    removeCourse,
  };
};

export default useCourses;