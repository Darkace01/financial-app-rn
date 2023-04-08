import {
  SAVE_USER_NOTIFICATION_TOKEN_URL,
  TURN_OFF_NOTIFICATIONS_URL,
  TURN_ON_NOTIFICATIONS_URL,
} from '../../constants/apiUrls';
import appAxios from '../AxiosInterceptor';

export const saveUserNotificationToken = async (token: string) => {
  try {
    const response = await appAxios.post(SAVE_USER_NOTIFICATION_TOKEN_URL, {
      token,
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

export const turnOnNotifications = async () => {
  try {
    const response = await appAxios.post(TURN_ON_NOTIFICATIONS_URL);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const turnOffNotifications = async () => {
  try {
    const response = await appAxios.post(TURN_OFF_NOTIFICATIONS_URL);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};
