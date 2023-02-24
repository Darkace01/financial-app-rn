import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { FontAwesome5, Octicons } from '@expo/vector-icons';
import Test from './Test';

const TopBar = () => {
  return (
    <View className='flex flex-row justify-between mx-auto mb-4 items-center w-full'>
      <View className='flex space-x-2 flex-row'>
        <View>
          <Octicons name='dot-fill' size={30} color={colors.boldPrimary} />
        </View>
        <View>
          <Text
            className={`text-xl font-semibold text-[${colors.boldPrimary}] font-[${fonts.font700}]`}
          >
            App Name
          </Text>
        </View>
      </View>
      <View>
        <FontAwesome5 name='bars' size={24} color='black' />
      </View>
    </View>
  );
};
export default TopBar;
