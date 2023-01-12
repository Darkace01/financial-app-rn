import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationTopBar from '../components/NavigationTopBar';
import TransactionIcon from '../components/TransactionIcon';

const TransactionDetailScreen = () => {
  return (
    <SafeAreaView className={`bg-themeGrey h-full mx-auto px-5`}>
      <NavigationTopBar withFilter={false} text='Transactions Details' />
      <View>
        <TransactionIcon />
        <View className='flex justify-center'>
          <View className='bg-[#EEF2F8] p-3 rounded-full flex items-center justify-center '>
            <Text className='text-accent'> 🍔 Eating Out</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetailScreen;
