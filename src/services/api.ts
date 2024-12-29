import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  login: async (credentials: any) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
};

export const books = {
  getAll: async () => {
    const response = await api.get('/books');
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/books/${id}`);
    return response.data;
  },
  create: async (bookData: any) => {
    const response = await api.post('/books', bookData);
    return response.data;
  },
  update: async (id: string, bookData: any) => {
    const response = await api.put(`/books/${id}`, bookData);
    return response.data;
  },
};

export const users = {
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },
  updateProfile: async (userData: any) => {
    const response = await api.put('/users/profile', userData);
    return response.data;
  },
};

export default api;