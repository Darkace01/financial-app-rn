import { View, Text, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { UserContext } from '../contexts/user.context';

const UserBar = () => {
  const { user } = useContext(UserContext);
  if (user === null) return null;
  const { firstName, lastName, profilePictureUrl } = user;
  //split the name
  return (
    <View className='flex flex-row space-x-3 items-center'>
      <View>
        <Image
          source={
            profilePictureUrl
              ? { uri: profilePictureUrl }
              : require('../../assets/images/profile.jpg')
          }
          className='w-10 h-10 rounded-full'
        />
      </View>
      <View className='flex flex-row'>
        <Text className={`text-xl font-bold font-[${fonts.font700}]`}>
          {firstName}{' '}
        </Text>
        <Text className={`text-xl font-[${fonts.font700}]`}>{lastName}</Text>
      </View>
    </View>
  );
};
export default UserBar;
