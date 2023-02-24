import { View, Text } from 'react-native';
import React from 'react';

const FirstLetterIcon = ({ letter }) => {
  return (
    <View className='bg-[#EEF2F8] bg-opacity-0 rounded-full flex h-12 w-12 items-center justify-center'>
      <Text className='text-accent'>{letter}</Text>
    </View>
  );
};

export default FirstLetterIcon;
