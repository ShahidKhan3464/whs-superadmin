import axios from 'axios';
import toast from 'react-hot-toast';
import { HTTP } from '../constants/http-methods.constant';
import { getUserAndToken } from '../utils/user-and-token.utils';

const BASE_URL =
  process.env.API_BASE_URL || 'https://dev-api.healthandsafetydashboard.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(
  async (config) => {
    const { token } = await getUserAndToken();
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

const makeRequest = async (
  method,
  endpoint,
  payload = null,
  params = null,
  id = null
) => {
  try {
    const url = id ? `${endpoint}/${id}` : endpoint;

    const config = {
      method,
      url,
      data: payload,
      params
    };

    const response = await apiClient(config);
    if (method !== HTTP.GET) {
      toast.success(response.data.message || 'Success');
    }
    return response;
  } catch (error) {
    let errorMessage =
      error?.response?.data?.message ??
      'Something went wrong. Please try again';
    toast.error(errorMessage);
  }
};

export default makeRequest;
