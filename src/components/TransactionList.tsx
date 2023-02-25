import {
  View,
  Text,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useCallback, useState, useEffect } from 'react';
import TransationItem from './TransationItem';
import CustomSearchBar from './CustomSearchBar';
import { getUserTransactions } from '../Helpers/Service/TransactionService';
import { apiResponse, Transaction } from '../Helpers/Interfaces/apiResponse';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Loading from './Loading';
const screenHeight = Dimensions.get('window').height;
const TransactionList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const initialTransactionItems: Transaction[] = [];
  const [transactionItems, setTransactionItems] = useState<Transaction[]>(
    initialTransactionItems
  );
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getUserTransactions()
      .then((res: apiResponse<Transaction>) => {
        if (res.hasError === false) {
          setTransactionItems(res.data);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: res.message,
          });
        }
        setRefreshing(false);
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Something went wrong',
        });
        setRefreshing(false);
      });
  }, []);

  useEffect(() => {
    try {
      setIsLoading(true);
      getUserTransactions().then((res: apiResponse<Transaction>) => {
        if (res.hasError === false) {
          console.log('Done fetching', isLoading);
          setTransactionItems(res.data);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Something went wrong',
          });
        }
        setIsLoading(false);
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
      });
      setIsLoading(false);
    }
  }, []);
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
