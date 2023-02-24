import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TRANSACTION_DETAIL_MODAL } from '../constants/screenRoutes';
import FirstLetterIcon from './FirstLetterIcon';
import { Transaction } from '../Helpers/Interfaces/apiResponse';

const TransationItem = (prop: Transaction) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(TRANSACTION_DETAIL_MODAL);
  };
  return (
    <TouchableOpacity
      className='flex flex-row justify-between my-3'
      onPress={handlePress}
    >
      <View>
        <FirstLetterIcon letter={prop?.categoryName[0]} />
      </View>
      <View className='flex justify-around'>
        <Text className='text-sm'>{prop.description}</Text>
        <Text className='text-xs text-slate-400'>
          {
            // TODO: format this later
          }
          {prop.dateAddedFormatted}
        </Text>
      </View>
      <View className='flex justify-center'>
        {
          // TODO: format this later
        }
        <Text>N{prop.amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransationItem;
