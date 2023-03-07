import { View, Text } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../constants/globalStyles';
interface Props {
  title: string | undefined;
}
const TransactionDetailCategory = ({ title }: Props) => {
  return (
    <View className='bg-[#EEF2F8] py-3 px-4 rounded-full flex flex-row space-x-2 items-center justify-center w-fit'>
      <Text>🍔</Text>
      <Text className='text-accent'> {title}</Text>
      <FontAwesome name='caret-down' size={24} color={colors.inputGray} />
    </View>
  );
};

export default TransactionDetailCategory;
