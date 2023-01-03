import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigations/navigator';
import { TailwindProvider } from 'tailwindcss-react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
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
