import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL =
  process.env.API_BASE_URL || 'https://dev-api.healthandsafetydashboard.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
    }
    return Promise.reject(error);
  }
);

const makeRequest = async (method, endpoint, payload = null, params = null) => {
  try {
    const config = {
      method,
      url: endpoint,
      data: payload,
      params
    };

    const response = await apiClient(config);
    toast.success(response?.data?.message || 'Success');
    return response;
  } catch (error) {
    let errorMessage =
      error?.response?.data?.message ??
      'Something went wrong. Please try again';
    toast.error(errorMessage);
  }
};

export default makeRequest;
