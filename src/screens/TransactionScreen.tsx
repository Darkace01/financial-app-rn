import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/globalStyles';
import NavigationTopBar from '../components/NavigationTopBar';

const TransactionScreen = () => {
  return (
    <SafeAreaView
      className={`bg-[${colors.pageBackground}] h-full mx-auto px-5`}
    >
      <NavigationTopBar />
      <Text>AnalyticsScreen</Text>
    </SafeAreaView>
  );
};

export default TransactionScreen;
