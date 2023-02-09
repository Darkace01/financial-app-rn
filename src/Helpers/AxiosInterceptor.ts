import axios from 'axios';
import { AUTH_TOKEN_KEY } from '../constants/storageConstants';
import { getItem } from './Service/StorageService';
const baseUrl = 'https://faapi.azurewebsites.net/api/v1.0/';
const appAxios = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
  timeoutErrorMessage: 'Network Request Timeout',
});

appAxios.interceptors.request.use(
  async (config) => {
    const token = await getItem(AUTH_TOKEN_KEY);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

appAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default appAxios;
