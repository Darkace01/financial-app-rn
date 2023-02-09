import { LOGIN_URL } from '../../constants/apiUrls';
import { AuthResponse } from '../Interfaces/apiResponse';

import appAxios from '../AxiosInterceptor';

export const login = async (email: string, password: string) => {
  const response = await appAxios.post(LOGIN_URL, {
    username: email,
    password,
  });
  //   console.log(response);
  return response.data;
};
