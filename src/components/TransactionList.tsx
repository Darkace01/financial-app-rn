import {
  View,
  Text,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useCallback } from 'react';
import TransationItem from './TransationItem';
import CustomSearchBar from './CustomSearchBar';
import { Transaction } from '../Helpers/Interfaces/apiResponse';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Loading from './Loading';
import { useTransactionFetch } from '../hooks/useTransactionFetch';
const screenHeight = Dimensions.get('window').height;
const TransactionList = () => {
  const { transactionItems, isLoading, error, setRefresh, refresh } =
    useTransactionFetch();
  const onRefresh = useCallback(() => {
    setRefresh(true);
  }, []);

  if (error) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Something went wrong',
    });
  }
  return (
    <ScrollView
      className={`bg-white rounded-r-3xl rounded-l-3xl rounded-b-none pt-5 px-5 space-y-2 `}
      style={{ height: screenHeight / 1.26 }}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      <View className='my-2'>
        <CustomSearchBar />
      </View>
      <>
        {isLoading === true ? (
          <Loading />
        ) : (
          //TODO: Group by date
          transactionItems?.map((item: Transaction) => {
            return (
              <TransationItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                categoryName={item.categoryName}
                dateAddedFormatted={item.dateAddedFormatted}
                description={item.description}
                id={item.id}
                categoryId={item.categoryId}
                dateAdded={item.dateAdded}
                userId={item.userId}
              />
            );
          })
        )}
      </>
      {/* <Text className='text-slate-400 text-xs'>Today</Text>
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
      </View> */}
    </ScrollView>
  );
};

export default TransactionList;
