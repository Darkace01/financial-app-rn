import { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { getItem, setItem } from '../Helpers/Service/StorageService';
import { NOTIFICATION_TOKEN } from '../constants/storageConstants';
import { saveUserNotificationToken } from '../Helpers/Service/NotificationService';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export const registerForPushNotificationsAsync = async () => {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to get push token for push notification!',
      });
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    await saveOrUpdateUserToken(token);
  } else {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Must use physical device for Push Notifications',
    });
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
};

const saveOrUpdateUserToken = async (token: string) => {
  try {
    var tokenExists = await getItem(NOTIFICATION_TOKEN);
    if (tokenExists) {
      if (tokenExists !== token) {
        // update token
        await setItem(NOTIFICATION_TOKEN, token);
        await saveUserNotificationToken(token);
      }
    } else {
      // save token
      await setItem(NOTIFICATION_TOKEN, token);
      await saveUserNotificationToken(token);
    }
  } catch (error) {
    //TODO: Handle this better
    // console.log('error', JSON.stringify(error));
    Toast.show({
      type: 'error',
      text1: 'Push Notification Error',
      text2: 'Failed to save push token for push notification!',
    });
  }
};
