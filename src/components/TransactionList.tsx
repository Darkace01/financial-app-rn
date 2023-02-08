import {
  View,
  Text,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import TransationItem from './TransationItem';
import CustomSearchBar from './CustomSearchBar';
const screenHeight = Dimensions.get('window').height;
const TransactionList = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const transItems = [1, 2, 3, 4, 5, 6];
  return (
    <ScrollView
      className={`bg-white rounded-r-3xl rounded-l-3xl rounded-b-none pt-5 px-5 space-y-2 `}
      style={{ height: screenHeight / 1.26 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className='my-2'>
        <CustomSearchBar />
      </View>
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
