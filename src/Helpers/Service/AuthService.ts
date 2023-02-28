import { LOGIN_URL, REGISTER_URL } from '../../constants/apiUrls';
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from '../Interfaces/apiResponse';

import appAxios from '../AxiosInterceptor';

export const login = async (payload: LoginPayload) => {
  try {
    const response = await appAxios.post(LOGIN_URL, payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const register = async (payload: RegisterPayload) => {
  try {
    const response = await appAxios.post(REGISTER_URL, payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};
