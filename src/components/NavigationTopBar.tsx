import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { fonts } from '../constants/globalStyles';

const NavigationTopBar = () => {
  return (
    <View className='flex flex-row justify-between mx-auto mb-4 items-center'>
      <View>
        <Ionicons name='chevron-back' size={20} color='black' />
      </View>
      <View>
        <Text className={`text-base font-[${fonts.font700}]`}>
          Transactions
        </Text>
      </View>
      <View>
        <FontAwesome5 name='filter' size={18} color='black' />
      </View>
    </View>
  );
};

export default NavigationTopBar;
