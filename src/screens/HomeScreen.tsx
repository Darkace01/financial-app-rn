import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
