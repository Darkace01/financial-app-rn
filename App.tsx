import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigations/navigator';
import * as WebBrowser from 'expo-web-browser';

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
