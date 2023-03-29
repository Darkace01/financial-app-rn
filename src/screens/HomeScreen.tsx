import { View, Dimensions, RefreshControl, ScrollView } from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import UserBar from '../components/UserBar';
import ActionButton from '../components/ActionButton';
import TransactionMinList from '../components/TransactionMinList';
import { useNavigation } from '@react-navigation/native';
import { TRANSACTION_CREATION_MODAL } from '../constants/screenRoutes';
import { useDashboardFetch } from '../hooks/useDashboardFetch';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import CardContainer from '../components/CardContainer';
import { useNotificationDisplay } from '../hooks/useNotificationDisplay';

import { UserContext } from '../contexts/user.context';
const screenHeight = Dimensions.get('window').height;
const HomeScreen = () => {
  const {
    dashboard,
    refresh,
    setRefresh,
    isLoading,
    error,
    user,
    errorMessage,
  } = useDashboardFetch();
  const {} = useNotificationDisplay();
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

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
        text2: errorMessage,
      });
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    console.log('hello');
    if (user) {
      setUser(user);
    }
  }, [refresh]);

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
        <View className='mt-3 mb-5 w-full'>
          <CardContainer
            monthlyData={dashboard?.monthlyBalance}
            clientBalance={dashboard?.balance}
            isLoading={isLoading}
          />
          <View className='mt-2 flex flex-row justify-evenly px-4 py-2'>
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
