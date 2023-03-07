import { View, Text, Pressable } from 'react-native';
import React from 'react';

const BigBlueButton = ({ action, buttonName }) => {
  return (
    <Pressable
      className='bg-accent h-12 flex justify-center items-center rounded-md'
      onPress={action}
    >
      <Text className='text-center font-semibold text-white'>{buttonName}</Text>
    </Pressable>
  );
};

export default BigBlueButton;
