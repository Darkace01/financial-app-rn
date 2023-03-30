import notifee, {
  AndroidImportance,
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import { getAppName, notificationTimes } from '../constants/commonHelpers';
import { NOTIFICATION_CHANNEL_ID } from '../constants/notificationConstants';
import { TRANSACTION_SCREEN } from '../constants/screenRoutes';

export const useNotificationDisplay = async () => {
  const setUpNotifications = async () => {
    const batteryOptimizationEnabled =
      await notifee.isBatteryOptimizationEnabled();
    if (batteryOptimizationEnabled) {
      // 2. ask your users to disable the feature
      Alert.alert(
        'Restrictions Detected',
        'To ensure notifications are delivered, please disable battery optimization for the app.',
        [
          // 3. launch intent to navigate the user to the appropriate screen
          {
            text: 'OK, open settings',
            onPress: async () =>
              await notifee.openBatteryOptimizationSettings(),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
    // Get the current time
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInSeconds = currentHour * 60 * 60 + currentMinute * 60;

    // Loop through the notification times and schedule notifications for each one
    for (const notificationTime of notificationTimes) {
      // Convert the time to seconds since midnight
      const [hour, minute, second] = notificationTime.time
        .split(':')
        .map(Number);
      const notificationTimeInSeconds = hour * 60 * 60 + minute * 60 + second;

      // Calculate the time until the next notification
      let timeUntilNotificationInSeconds =
        notificationTimeInSeconds - currentTimeInSeconds;
      if (timeUntilNotificationInSeconds <= 0) {
        timeUntilNotificationInSeconds += 24 * 60 * 60; // Add 24 hours if the notification time has already passed today
      }

      // Schedule the notification
      const notificationDate = new Date(
        now.getTime() + timeUntilNotificationInSeconds * 1000
      );
      await notifee.createChannel({
        id: NOTIFICATION_CHANNEL_ID,
        name: getAppName(),
        importance:
          Platform.OS === 'android'
            ? AndroidImportance.HIGH
            : AndroidImportance.HIGH,
        sound: 'hollow',
      });
      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: notificationDate.getTime(),
        alarmManager: {
          allowWhileIdle: true,
        },
        repeatFrequency: RepeatFrequency.DAILY,
      };

      await notifee.createTriggerNotification(
        {
          title: notificationTime.time,
          body: notificationTime.description,
          android: {
            channelId: NOTIFICATION_CHANNEL_ID,
            sound: 'hollow',
            pressAction: {
              id: 'default',
            },
          },
        },
        trigger
      );
    }
  };

  useEffect(() => {
    setUpNotifications();
  }, []);

  return {};
};
