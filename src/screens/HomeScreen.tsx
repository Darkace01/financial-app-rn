import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import { colors } from '../constants/globalStyles';
import BalanceCard from '../components/BalanceCard';
import UserBar from '../components/UserBar';
import ActionButton from '../components/ActionButton';
// get screenwidth
const screenWidth = Dimensions.get('window').width;
const HomeScreen = () => {
  return (
    <SafeAreaView
      className={`bg-[${colors.pageBackground}] h-full mx-auto px-5`}
    >
      <TopBar />
      <UserBar />
      <View className='mt-5 mb-5 w-full'>
        <BalanceCard />
        <View className='mt-2 flex flex-row justify-center'>
          <ActionButton />
          <ActionButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    backgroundColor: colors.pageBackground,
    height: '100%',
  },
  chartSection: {
    width: screenWidth / 1.1,
  },
});

export default HomeScreen;
