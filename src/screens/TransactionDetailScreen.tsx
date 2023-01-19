import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationTopBar from '../components/NavigationTopBar';
import TransactionIcon from '../components/TransactionIcon';
import TransactionDetailCategory from '../components/TransactionDetailCategory';
import { colors } from '../constants/globalStyles';
// screen width
const screenWidth = Dimensions.get('window').width;
// 80% of screen width
const width = screenWidth * 0.8;

const TransactionDetailScreen = () => {
  return (
    <SafeAreaView className={`bg-themeGrey h-full mx-auto px-5`}>
      <NavigationTopBar withFilter={false} text='Transactions Details' />
      <View className='px-4'>
        <TransactionIcon />
        <View className='flex justify-center items-center'>
          <TransactionDetailCategory />
        </View>
        <View className='flex justify-center items-center my-4'>
          <View className='flex space-y-5'>
            <View
              className='rounded-xl py-6 px-4 bg-white flex space-y-4'
              style={{ width: width }}
            >
              <View className='flex flex-row justify-between '>
                <View>
                  <Text className='text-[#6C727F]'>Type</Text>
                </View>
                <View className='text-right'>
                  <Text className='text-right text-[#1B7A00]'>Credit</Text>
                </View>
              </View>
              <View className='flex flex-row justify-between '>
                <View>
                  <Text className='text-[#6C727F]'>Decription</Text>
                </View>
                <View className='text-right'>
                  <Text className='text-right'>Payment for Coffee</Text>
                </View>
              </View>
            </View>
            <View
              className='rounded-xl py-6 px-4 bg-[#F9FAFB] flex space-y-4'
              style={{ width: width }}
            >
              <View className='flex flex-row justify-between '>
                <View>
                  <Text className='text-[#6C727F]'>Bank</Text>
                </View>
                <View className='text-right'>
                  <Text className='text-right'>Guaranty Trust Bank</Text>
                </View>
              </View>
              <View className='flex flex-row justify-between '>
                <View>
                  <Text className='text-[#6C727F]'>Amount</Text>
                </View>
                <View className='text-right'>
                  <Text className='text-right text-[#1B7A00]'>+N42,209</Text>
                </View>
              </View>
            </View>
            <View
              className='rounded-xl py-6 px-4 bg-white flex space-y-4'
              style={{ width: width }}
            >
              <View className='flex flex-row justify-between '>
                <View>
                  <Text className='text-[#6C727F]'>Date</Text>
                </View>
                <View className='text-right'>
                  <Text className='text-right'>10 Sep, 2021</Text>
                </View>
              </View>
              <View className='flex flex-row justify-between '>
                <View>
                  <Text className='text-[#6C727F]'>Time</Text>
                </View>
                <View className='text-right'>
                  <Text className='text-right'>12:03 AM</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetailScreen;
