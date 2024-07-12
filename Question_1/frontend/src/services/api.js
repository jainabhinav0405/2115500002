import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create an axios instance
const api = axios.create({
  baseURL: "http://20.244.56.144/test/",
});

// Add a request interceptor to include the token in every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log(token); // Assuming you store the token in localStorage

  if (token) {
    config.headers['Authorization'] = token; // Note: We're passing the entire token, including 'Bearer'
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const getTopProducts = async (company, category, minPrice, maxPrice, top) => {
  try {
    const response = await api.get('/products/top', {
      params: { company, category, minPrice, maxPrice, top }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Add other API calls here as needed