import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/globalStyles';
import NavigationTopBar from '../components/NavigationTopBar';
import ToolipButton from '../components/ToolipButton';
import TransactionList from '../components/TransactionList';

const TransactionScreen = () => {
  return (
    <SafeAreaView className={`bg-themeGrey h-full mx-auto px-5`}>
      <NavigationTopBar withFilter />
      <View className='flex flex-row justify-between my-4'>
        <ToolipButton text='Today' />
        <ToolipButton text='Week' />
        <ToolipButton text='Month' />
        <ToolipButton text='Year' active />
      </View>
      <View>
        <TransactionList />
      </View>
    </SafeAreaView>
  );
};

export default TransactionScreen;
