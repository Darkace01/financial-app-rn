import { View, Text } from 'react-native';
import React from 'react';
import FirstLetterIcon from './FirstLetterIcon';
interface Props {
  title: string;
}
const TransactionIcon = ({ title }: Props) => {
  return (
    <View className='flex items-center justify-center my-5'>
      <FirstLetterIcon letter={title ? title[0] : ''} />
      <Text className='text-lg font-bold mt-2'> {title}</Text>
    </View>
  );
};

export default TransactionIcon;
