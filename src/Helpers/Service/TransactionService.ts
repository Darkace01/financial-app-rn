import { GET_USER_TRANSACTIONS_URL } from '../../constants/apiUrls';
import appAxios from '../AxiosInterceptor';

export const getUserTransactions = async () => {
  const response = await appAxios.get(GET_USER_TRANSACTIONS_URL);
  return response.data;
};
