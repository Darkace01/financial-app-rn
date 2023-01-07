import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationTopBar from '../components/NavigationTopBar';
import TransactionIcon from '../components/TransactionIcon';

const TransactionDetailScreen = () => {
  return (
    <SafeAreaView className={`bg-themeGrey h-full mx-auto px-5`}>
      <NavigationTopBar withFilter={false} />
      <View>
        <TransactionIcon />
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetailScreen;
