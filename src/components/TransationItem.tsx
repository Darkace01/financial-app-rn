import { View, Text } from 'react-native';
import React from 'react';

const TransationItem = () => {
  return (
    <View className='flex flex-row justify-between'>
      <View>
        <View className='bg-accent bg-opacity-25 p-2 rounded-full h-15 w-15'>
          <Text className='text-white'>P</Text>
        </View>
      </View>
      <View>
        <Text>Transfer to Phillip</Text>
        <Text>12:03 AM</Text>
      </View>
      <View></View>
    </View>
  );
};

export default TransationItem;
