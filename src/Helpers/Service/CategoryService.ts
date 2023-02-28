import { GET_USER_CATEGORIES_URL } from '../../constants/apiUrls';
import appAxios from '../AxiosInterceptor';

export const getUserCategories = async () => {
  try {
    const response = await appAxios.get(GET_USER_CATEGORIES_URL);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};
