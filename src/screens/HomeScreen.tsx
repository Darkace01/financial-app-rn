import { View, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import { colors } from '../constants/globalStyles';
import BalanceCard from '../components/BalanceCard';
import UserBar from '../components/UserBar';
import ActionButton from '../components/ActionButton';
import TransactionMinList from '../components/TransactionMinList';
import { useNavigation } from '@react-navigation/native';
import { TRANSACTION_CREATION_MODAL } from '../constants/screenRoutes';
// get screenwidth
const screenWidth = Dimensions.get('window').width;
const HomeScreen = () => {
  const navigation = useNavigation();

  const handleMoneyInandOut = () => {
    navigation.navigate(TRANSACTION_CREATION_MODAL);
  };
  return (
    <SafeAreaView className={`bg-themeGrey h-full w-full mx-auto px-5`}>
      <TopBar />
      <UserBar />
      <View className='mt-5 mb-5 w-full'>
        <BalanceCard />
        <View className='mt-2 flex flex-row justify-evenly px-4 py-3'>
          <ActionButton moneyIn action={handleMoneyInandOut} />
          <ActionButton moneyIn={false} action={handleMoneyInandOut} />
        </View>
        <View className='mt-2'>
          <TransactionMinList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
