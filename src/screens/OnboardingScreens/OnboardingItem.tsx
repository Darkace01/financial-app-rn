import {
  View,
  Text,
  useWindowDimensions,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SlideItem } from '../../../types';

const OnboardingItem = ({
  title,
  description,
  nextStep,
  skipStep,
}: SlideItem) => {
  // const { width } = useWindowDimensions();
  const itemWidth = Dimensions.get('window').width;

  return (
    <View
      className='p-7 mx-auto flex h-screen content-center flex-col justify-center relative'
      style={{ width: itemWidth }}
    >
      <TouchableOpacity className='absolute top-10 right-4' onPress={skipStep}>
        <View className='bg-[#684cef] py-2 px-4 rounded-full'>
          <Text className='text-white'>Skip</Text>
        </View>
      </TouchableOpacity>
      <View className='bg-white p-4 rounded-3xl items-center space-y-5 py-7 px-5 min-h-[100px]'>
        <Text className='font-bold text-2xl text-center'>{title}</Text>
        <Text className='text-center text-base'>{description}</Text>
        <TouchableOpacity onPress={nextStep}>
          <View className='bg-accent  py-4 px-20 rounded-full items-center'>
            <Text className='text-white'>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingItem;
