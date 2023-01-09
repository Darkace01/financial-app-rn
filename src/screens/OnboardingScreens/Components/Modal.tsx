import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import assetsObject from '../../../constants/assets';

const Modal = ({ title, body, screen, image }) => {
  const navigation = useNavigation();
  return (
    <View className='w-[335px] flex items-center bg-white rounded-[40px] p-4 space-y-6'>
      <Text className='text-center text-[#13085E] text-[25px] font-bold'>
        {title}
      </Text>
      <Text className='text-center text-[#13085E] max-w-[70%]'>{body}</Text>
      <View className='flex flex-row items-center space-x-1'>
        <Image
          source={
            image === 'first'
              ? assetsObject.mainRectangle
              : assetsObject.otherRect
          }
          className={image === 'first' ? 'w-[6px] h-[18px]' : 'w-[6px] h-[6px]'}
        />
        <Image
          source={
            image === 'second'
              ? assetsObject.mainRectangle
              : assetsObject.otherRect
          }
          className={
            image === 'second' ? 'w-[6px] h-[18px]' : 'w-[6px] h-[6px]'
          }
        />
        <Image
          source={
            image === 'third'
              ? assetsObject.mainRectangle
              : assetsObject.otherRect
          }
          className={image === 'third' ? 'w-[6px] h-[18px]' : 'w-[6px] h-[6px]'}
        />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate(screen);
        }}
        className='bg-[#2C14DD] h-[62px] w-[207px] rounded-3xl flex justify-center items-center'
      >
        <Text className='text-white text-base'>Next</Text>
      </Pressable>
    </View>
  );
};

export default Modal;
