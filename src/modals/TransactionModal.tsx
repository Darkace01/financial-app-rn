import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationTopBar from '../components/NavigationTopBar';
import { fonts } from '../constants/globalStyles';

const TransactionModal = () => {
  return (
    <SafeAreaView className='bg-white h-full mx-auto px-5'>
      <NavigationTopBar withFilter={false} text='Money In' />
      <View>
        <View>
          <Text className={`text-base font-[${fonts.font700}]`}>Title</Text>
          <View className='flex flex-row bg-themeGrey py-2 px-3 rounded-md items-center my-1'>
            <TextInput
              placeholder='Search transactions'
              className='ml-1 px-1 w-full'
            />
          </View>
        </View>
        <View className='flex flex-row'>
          <Text className={`text-base font-[${fonts.font700}]`}>Category</Text>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionModal;
