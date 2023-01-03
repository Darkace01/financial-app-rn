import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigations/navigator';
import { TailwindProvider } from 'tailwindcss-react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

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
    <TailwindProvider>
      <StatusBar style='auto' />
      <AppNavigation />
    </TailwindProvider>
  );
}
