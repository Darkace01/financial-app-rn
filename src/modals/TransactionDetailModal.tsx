import { View, Text, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationTopBar from '../components/NavigationTopBar';
import TransactionIcon from '../components/TransactionIcon';
import TransactionDetailCategory from '../components/TransactionDetailCategory';
import { colors } from '../constants/globalStyles';
import { useTransactionDetailFetch } from '../hooks/useTransactionDetailFetch';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Loading from '../components/Loading';
// screen width
const screenWidth = Dimensions.get('window').width;
// 80% of screen width
const width = screenWidth * 0.8;

const TransactionDetailModal = ({ route, navigation }) => {
  const { transactionId } = route.params;
  const { transaction, isLoading, error, refresh } =
    useTransactionDetailFetch(transactionId);
  // useEffect(() => {
  //   handleFetchTransaction(transactionId);
  // }, [transactionId]);

  if (error) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Something went wrong',
    });
  }

  return (
    <SafeAreaView className='bg-themeGrey h-full mx-auto px-5 w-full'>
      {isLoading === true && !transaction ? (
        <Loading />
      ) : (
        <>
          <NavigationTopBar withFilter={false} text='Transactions Details' />
          <View className='px-4'>
            <TransactionIcon title={transaction?.title} />
            <View className='flex justify-center items-center'>
              <TransactionDetailCategory title={transaction?.categoryName} />
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
                      <Text className='text-right text-[#1B7A00]'>
                        {transaction?.inFlow ? 'Income' : 'Expense'}
                      </Text>
                    </View>
                  </View>
                  <View className='flex flex-row justify-between '>
                    <View>
                      <Text className='text-[#6C727F]'>Decription</Text>
                    </View>
                    <View className='text-right'>
                      <Text className='text-right'>
                        {transaction?.description}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  className='rounded-xl py-6 px-4 bg-[#F9FAFB] flex space-y-4'
                  style={{ width: width }}
                >
                  <View className='flex flex-row justify-between '>
                    <View>
                      <Text className='text-[#6C727F]'>Amount</Text>
                    </View>
                    <View className='text-right'>
                      {transaction?.inFlow ? (
                        <Text className='text-green-500'>
                          +₦{transaction?.amount}
                        </Text>
                      ) : (
                        <Text className='text-red-500'>
                          -₦{transaction?.amount}
                        </Text>
                      )}
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
                      <Text className='text-right'>
                        {transaction?.dateAddedFormatted}
                      </Text>
                    </View>
                  </View>
                  <View className='flex flex-row justify-between '>
                    <View>
                      <Text className='text-[#6C727F]'>Time</Text>
                    </View>
                    <View className='text-right'>
                      <Text className='text-right'>
                        {transaction?.dateAdded}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default TransactionDetailModal;
