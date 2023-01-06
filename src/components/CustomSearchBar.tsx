import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const CustomSearchBar = () => {
  return (
    <View className='flex flex-row bg-themeGrey py-4 px-3 rounded-full items-center'>
      <Feather name='search' size={24} color='grey' />
      <TextInput
        placeholder='Search transactions'
        className='ml-2 px-1 w-11/12'
      />
    </View>
  );
};

export default CustomSearchBar;
