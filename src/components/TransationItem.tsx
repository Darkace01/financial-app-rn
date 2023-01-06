import { View, Text } from 'react-native';
import React from 'react';

const TransationItem = () => {
  return (
    <View className='flex flex-row justify-between my-3'>
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
    </View>
  );
};

export default TransationItem;
