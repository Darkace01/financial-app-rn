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
  currentIndex,
  totalSlides,
}: SlideItem) => {
  // const { width } = useWindowDimensions();
  const itemWidth = Dimensions.get('window').width;
  const itemHeight = Dimensions.get('window').height;

  return (
    <View
      className='px-9 mx-auto flex h-screen content-center flex-col justify-center relative'
      style={{ width: itemWidth }}
    >
      <TouchableOpacity className='absolute top-10 right-4' onPress={skipStep}>
        <View className='bg-[#684cef] py-2 px-4 rounded-full'>
          <Text className='text-white'>
            {currentIndex === totalSlides - 1 ? 'Get Started' : 'Skip'}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        className='bg-white p-4 rounded-3xl items-center space-y-5 py-7 px-5 justify-center'
        style={{
          minHeight: itemHeight / 3,
        }}
      >
        <Text className='font-bold text-xl text-center'>{title}</Text>
        <Text className='text-center text-base'>{description}</Text>
        <TouchableOpacity onPress={nextStep}>
          <View className='flex flex-row justify-center items-center'>
            {Array(totalSlides)
              .fill(0)
              .map((_, index) => (
                <View
                  key={index}
                  className={`${
                    currentIndex === index
                      ? 'bg-accent' // active dot
                      : 'bg-gray-300' // inactive dot
                  } w-1 h-1 rounded-full mx-1`}
                ></View>
              ))}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextStep}>
          <View
            className='bg-accent  py-4 px-5 rounded-full items-center flex-row justify-center'
            style={{ width: itemWidth / 2 }}
          >
            <Text className='text-white'>
              {currentIndex === totalSlides - 1 ? 'Get Started' : 'Next'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingItem;
