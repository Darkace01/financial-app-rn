import axios from 'axios';
import { useContext } from 'react';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { BASE_URL } from '../constants/apiUrls';
import { AUTH_TOKEN_KEY } from '../constants/storageConstants';
import { UserContext } from '../contexts/user.context';
import { getItem, removeItem } from './Service/StorageService';
//TODO: Read this from environment variables
const appAxios = axios.create({
  baseURL: BASE_URL,
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
const signOutUserGlobally = () => {
  // navigate to login page
  const { signOutUser } = useContext(UserContext);
  Toast.show({
    type: 'error',
    text1: 'Session Expired',
    text2: 'Please login again',
  });
  signOutUser();
};
appAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    // Any HTTP Code which is not 2xx will be considered as error
    if (err.response) {
      const statusCode = err.response.status;
      if (statusCode === 401 || statusCode === 403) {
        signOutUserGlobally();
      }
    }

    throw err;
  }
);

export default appAxios;
