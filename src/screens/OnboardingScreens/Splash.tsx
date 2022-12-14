import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import assetsObject from '../../constants/assets';
const Splash = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate('Splash2');
    }, 3000);
  });
  return (
    <SafeAreaView className='flex-1 flex justify-center items-center bg-accent'>
      <StatusBar/>
      <View className='flex items-center'>
        <Image
          source={assetsObject.defualtProfile}
          className='rounded-full'
          style={{
            width: 65,
            height: 67,
            resizeMode: 'contain',
          }}
        />
        <Text className='text-white font-bold text-3xl'>App Name</Text>
        <Text className='text-white'>Fast, Secure, Easy</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
