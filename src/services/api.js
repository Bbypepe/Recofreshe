// src/services/api.js
import axios from 'axios';

// Create an instance of axios
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api', // Make base URL configurable
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptor to handle errors globally
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle error response
    console.error('API call error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

// Function to set authorization token
export const setAuthToken = token => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

// Export the axios instance
export default apiClient;
