import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TRANSACTION_DETAIL_SCREEN } from '../constants/screenRoutes';

const TransationItem = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(TRANSACTION_DETAIL_SCREEN);
  };
  return (
    <TouchableOpacity
      className='flex flex-row justify-between my-3'
      onPress={handlePress}
    >
      <View>
        <View className='bg-[#EEF2F8] bg-opacity-0 rounded-full flex h-12 w-12 items-center justify-center'>
          <Text className='text-accent'>P</Text>
        </View>
      </View>
      <View className='flex justify-around'>
        <Text className='text-sm'>Transfer to Phillip</Text>
        <Text className='text-xs text-slate-400'>12:03 AM</Text>
      </View>
      <View className='flex justify-center'>
        <Text>+N42,209</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransationItem;
