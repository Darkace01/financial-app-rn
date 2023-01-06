import { View, Text } from 'react-native';
import React from 'react';

const TransationItem = () => {
  return (
    <View className='flex flex-row justify-between'>
      <View>
        <View className='bg-accent bg-opacity-0 rounded-full flex h-14 w-14 items-center justify-center'>
          <Text className='text-white'>P</Text>
        </View>
      </View>
      <View>
        <Text className='text-sm'>Transfer to Phillip</Text>
        <Text className='text-xs text-slate-400'>12:03 AM</Text>
      </View>
      <View>
        <Text>+N42,209</Text>
      </View>
    </View>
  );
};

export default TransationItem;
