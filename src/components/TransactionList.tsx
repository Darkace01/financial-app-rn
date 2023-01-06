import { View, Text, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import TransationItem from './TransationItem';
const screenHeight = Dimensions.get('window').height;
const TransactionList = () => {
  const transItems = [1, 2, 3, 4, 5, 6];
  return (
    <ScrollView
      className={`bg-white rounded-r-3xl rounded-l-3xl rounded-b-none pt-5 px-5 space-y-2 `}
      style={{ height: screenHeight / 1.26 }}
    >
      <Text className='text-slate-400 text-xs'>Today</Text>
      <View className='pb-5'>
        {transItems.map((item, index) => {
          return <TransationItem key={index} />;
        })}
      </View>
      <Text className='text-slate-400 text-xs'>Yesterday</Text>
      <View className='pb-10'>
        {transItems.map((item, index) => {
          return <TransationItem key={index} />;
        })}
      </View>
    </ScrollView>
  );
};

export default TransactionList;
