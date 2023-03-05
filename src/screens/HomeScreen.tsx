import { View, Dimensions, RefreshControl, ScrollView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import BalanceCard from '../components/BalanceCard';
import UserBar from '../components/UserBar';
import ActionButton from '../components/ActionButton';
import TransactionMinList from '../components/TransactionMinList';
import { useNavigation } from '@react-navigation/native';
import { TRANSACTION_CREATION_MODAL } from '../constants/screenRoutes';
import { useDashboardFetch } from '../hooks/useDashboardFetch';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import ChartCard from '../components/ChartCard';
const screenHeight = Dimensions.get('window').height;
const HomeScreen = () => {
  const { dashboard, refresh, setRefresh, isLoading, error } =
    useDashboardFetch();
  const navigation = useNavigation();

  const handleMoneyIn = () => {
    navigation.navigate(TRANSACTION_CREATION_MODAL, {
      moneyIn: true,
    });
  };
  const handleMoneyOut = () => {
    navigation.navigate(TRANSACTION_CREATION_MODAL, {
      moneyIn: false,
    });
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
      });
    }
  }, [error]);

  const onRefresh = useCallback(() => {
    setRefresh(true);
  }, []);
  return (
    <SafeAreaView className={`bg-themeGrey h-full w-full mx-auto px-5 flex-1`}>
      <ScrollView
        className='flex-1'
        style={{
          height: screenHeight,
        }}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      >
        <TopBar />
        <UserBar />
        <View className='mt-5 mb-5 w-full'>
          <BalanceCard
            isLoading={isLoading}
            clientBalance={dashboard?.balance}
          />
          {isLoading === false ? (
            <ChartCard
              isLoading={isLoading}
              monthlyData={dashboard?.monthlyBalance}
            />
          ) : (
            <></>
          )}
          <View className='mt-2 flex flex-row justify-evenly px-4 py-3'>
            <ActionButton moneyIn action={handleMoneyIn} />
            <ActionButton moneyIn={false} action={handleMoneyOut} />
          </View>
          <View className='mt-2'>
            <TransactionMinList
              isLoading={isLoading}
              transactionItems={dashboard?.transactions}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
