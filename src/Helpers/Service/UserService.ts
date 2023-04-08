import {
  BASE_URL,
  GET_USER_BASIC_DETAILS_URL,
  SAVE_USER_PROFILE_PICTURE_URL,
  UPDATE_USER_BASIC_DETAILS_URL,
} from '../../constants/apiUrls';
import { AUTH_TOKEN_KEY } from '../../constants/storageConstants';
import appAxios from '../AxiosInterceptor';
import { BasicUser } from '../Interfaces/apiResponse';
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

export const saveUserProfilePicture = async (file: any) => {
  try {
    const formData = new FormData();
    let arr = file.uri.split('/');
    let fileName = arr[arr.length - 1];
    formData.append('file', {
      uri: file.uri,
      type: `image/${fileName.split('.')[1]}`,
      name: fileName,
    });
    const response = await appAxios.post(
      SAVE_USER_PROFILE_PICTURE_URL,
      formData,
      {
        timeout: 200000,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
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

export const updateUserDetails = async (user: BasicUser) => {
  try {
    const response = await appAxios.post(UPDATE_USER_BASIC_DETAILS_URL, user);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};
