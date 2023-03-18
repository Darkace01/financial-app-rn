import {
  BASE_URL,
  GET_USER_BASIC_DETAILS_URL,
  SAVE_USER_PROFILE_PICTURE_URL,
} from '../../constants/apiUrls';
import { AUTH_TOKEN_KEY } from '../../constants/storageConstants';
import appAxios from '../AxiosInterceptor';
import { getItem } from './StorageService';

export const getUserBasicDetails = async () => {
  try {
    const response = await appAxios.get(GET_USER_BASIC_DETAILS_URL);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const saveUserProfilePicture = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    // const response = await appAxios.postForm(
    //   SAVE_USER_PROFILE_PICTURE_URL,
    //   formData,
    //   {
    //     timeout: 200000,
    //   }
    // );
    // return response.data;
    const url = `${BASE_URL}${SAVE_USER_PROFILE_PICTURE_URL}`;
    const token = await getItem(AUTH_TOKEN_KEY);
    const config = {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': `multipart/form-data`,
        Accept: 'application/json',
      },
    };
    console.log('url', url);
    const response = await fetch(url, config);
    console.log(response.json());
    return response.json();
  } catch (error) {
    console.log('error fetch', JSON.stringify(error));
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};
