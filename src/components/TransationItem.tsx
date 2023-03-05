import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TRANSACTION_DETAIL_MODAL } from '../constants/screenRoutes';
import FirstLetterIcon from './FirstLetterIcon';
import { Transaction } from '../Helpers/Interfaces/apiResponse';
import Currency from 'react-currency-formatter';
import { timeSince } from '../constants/commonHelpers';

const TransationItem = (prop: Transaction) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(TRANSACTION_DETAIL_MODAL, {
      transactionId: prop.id,
    });
  };
  return (
    <TouchableOpacity
      className='flex flex-row justify-between my-3 space-x-3'
      onPress={handlePress}
    >
      <View>
        <FirstLetterIcon
          letter={prop.categoryName ? prop.categoryName[0] : ''}
        />
      </View>
      <View className='flex justify-around flex-1'>
        <Text className='text-sm'>{prop.title}</Text>
        <Text className='text-xs text-slate-400'>
          {timeSince(prop.dateAdded)}
        </Text>
      </View>
      <View className='flex justify-center'>
        {prop.inFlow ? (
          <Text className='text-green-500'>
            + <Currency quantity={prop?.amount} currency='NGN' />{' '}
          </Text>
        ) : (
          <Text className='text-red-500'>
            - <Currency quantity={prop?.amount} currency='NGN' />
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TransationItem;
