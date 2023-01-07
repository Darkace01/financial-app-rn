import { View, Text } from 'react-native';
import React from 'react';
import FirstLetterIcon from './FirstLetterIcon';

const TransactionIcon = () => {
  return (
    <View className='flex items-center justify-center my-5'>
      <FirstLetterIcon />
      <Text className='text-lg font-bold mt-2'> Transfer to Philip</Text>
    </View>
  );
};

export default TransactionIcon;
