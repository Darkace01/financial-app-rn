import { registerRootComponent } from 'expo';

import App from './App';

import notifee, { EventType } from '@notifee/react-native';

//Notifee Background Handler
notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;

  // Check if the user pressed the "Mark as read" action
  if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
    // Update external API

    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
