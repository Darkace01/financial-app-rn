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
import { useHomeTransactionFetch } from '../hooks/useHomeTransactionFetch';
const screenHeight = Dimensions.get('window').height;
interface Props {
  isLoading: boolean;
  transactionItems: Transaction[];
}
const TransactionMinList = ({ transactionItems, isLoading }: Props) => {
  return (
    <ScrollView
      className={`bg-white rounded-r-3xl rounded-l-3xl rounded-b-none pt-5 px-5 space-y-2 `}
      style={{ height: screenHeight / 1.9 }}
    >
      <View className='pb-16'>
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
                inFlow={item.inFlow}
              />
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

export default TransactionMinList;
