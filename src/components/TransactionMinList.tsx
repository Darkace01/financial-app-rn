import {
  View,
  Text,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import TransationItem from './TransationItem';
import { apiResponse, Transaction } from '../Helpers/Interfaces/apiResponse';
import { getUserTransactions } from '../Helpers/Service/TransactionService';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
const screenHeight = Dimensions.get('window').height;
const TransactionMinList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const initialTransactionItems: Transaction[] = [];
  const [transactionItems, setTransactionItems] = useState(
    initialTransactionItems
  );
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getUserTransactions().then((res: apiResponse<Transaction>) => {
      if (res.hasError === false) {
        setTransactionItems(res.data);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: res.message,
        });
      }
    });
    setRefreshing(false);
  }, []);

  useEffect(() => {
    try {
      getUserTransactions().then((res: apiResponse<Transaction>) => {
        if (res.hasError === false) {
          setTransactionItems(res.data);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Something went wrong',
          });
        }
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
      });
    }
  }, []);

  return (
    <ScrollView
      className={`bg-white rounded-r-3xl rounded-l-3xl rounded-b-none pt-5 px-5 space-y-2 `}
      style={{ height: screenHeight / 2.11 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text className='text-slate-400 text-xs'>Today</Text>
      <View className='pb-10'>
        {transactionItems?.map((item: Transaction) => {
          return (
            <TransationItem
              key={item.id}
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
        })}
      </View>
    </ScrollView>
  );
};

export default TransactionMinList;
