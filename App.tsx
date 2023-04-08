import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigation from './src/navigations/navigator';
import * as WebBrowser from 'expo-web-browser';

//External auth: sign in with google
WebBrowser.maybeCompleteAuthSession();
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import Toast from 'react-native-toast-message';

//Context
import { UserProvider } from './src/contexts/user.context';
import { AppProvider } from './src/contexts/app.context';

//Expo Notification
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <AppProvider>
      <UserProvider>
        <StatusBar style='auto' />
        <AppNavigation />
        <Toast />
      </UserProvider>
    </AppProvider>
  );
}
