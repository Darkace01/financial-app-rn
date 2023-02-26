import {
  View,
  Text,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useCallback } from 'react';
import TransationItem from './TransationItem';
import { Transaction } from '../Helpers/Interfaces/apiResponse';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Loading from './Loading';
import { useTransactionFetch } from '../hooks/useTransactionFetch';
const screenHeight = Dimensions.get('window').height;
const TransactionMinList = () => {
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
      style={{ height: screenHeight / 2.11 }}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      <View className='pb-10'>
        {isLoading === true ? (
          <Loading />
        ) : (
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
      </View>
    </ScrollView>
  );
};

export default TransactionMinList;
