import {
  GET_USER_DASHBOARD_URL,
  GET_USER_TRANSACTIONS_URL,
  SAVE_USER_TRANSACTIONS_URL,
} from '../../constants/apiUrls';
import { AUTH_TOKEN_KEY } from '../../constants/storageConstants';
import appAxios from '../AxiosInterceptor';
import { Transaction } from '../Interfaces/apiResponse';
import { getItem, removeItem } from './StorageService';

export const getUserTransactions = async (
  searchTerm: string = '',
  take: Number = 50,
  startDate: string = '',
  endDate: string = ''
) => {
  try {
    const response = await appAxios.get(GET_USER_TRANSACTIONS_URL, {
      params: {
        searchTerm: searchTerm,
        take: take,
        startDateStr: startDate,
        endDateStr: endDate,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const saveUserTransaction = async (transaction: Transaction) => {
  try {
    const response = await appAxios.post(
      SAVE_USER_TRANSACTIONS_URL,
      transaction
    );
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const fetchUserTransactionById = async (id: Number) => {
  try {
    const response = await appAxios.get(`${GET_USER_TRANSACTIONS_URL}/${id}`);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const fetchUserDashboard = async () => {
  try {
    const response = await appAxios.get(GET_USER_DASHBOARD_URL);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};
