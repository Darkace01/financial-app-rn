import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import { colors } from '../constants/globalStyles';
import BalanceCard from '../components/BalanceCard';
import UserBar from '../components/UserBar';
import ActionButton from '../components/ActionButton';
import TransactionMinList from '../components/TransactionMinList';
// get screenwidth
const screenWidth = Dimensions.get('window').width;
const HomeScreen = () => {
  return (
    <SafeAreaView className={`bg-themeGrey h-full mx-auto px-5`}>
      <TopBar />
      <UserBar />
      <View className='mt-5 mb-5 w-full'>
        <BalanceCard />
        <View className='mt-2 flex flex-row justify-evenly px-4 py-3'>
          <ActionButton moneyIn />
          <ActionButton moneyIn={false} />
        </View>
        <View className='mt-2'>
          <TransactionMinList />
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
