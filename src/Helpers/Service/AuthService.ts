import { LOGIN_URL, REGISTER_URL } from '../../constants/apiUrls';
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from '../Interfaces/apiResponse';

import appAxios from '../AxiosInterceptor';

export const login = async (payload: LoginPayload) => {
  const response = await appAxios.post(LOGIN_URL, payload);
  return response.data;
};

export const register = async (payload: RegisterPayload) => {
  const response = await appAxios.post(REGISTER_URL, payload);
  return response.data;
};
