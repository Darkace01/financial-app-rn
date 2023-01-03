import { View, Text, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { AntDesign } from '@expo/vector-icons';
import Test from './Test';

const UserBar = () => {
  return (
    <View className='flex flex-row space-x-3 items-center'>
      <View>
        <Image
          source={require('../../assets/images/profile.jpg')}
          className='w-10 h-10 rounded-full'
        />
      </View>
      <View className='flex flex-row'>
        <Text className={`text-xl font-bold font-[${fonts.font700}]`}>
          Kazeem{' '}
        </Text>
        <Text className={`text-xl font-[${fonts.font700}]`}>Quadri</Text>
      </View>
    </View>
  );
};
export default UserBar;
