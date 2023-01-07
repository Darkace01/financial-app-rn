import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DASHBOARD,
  TRANSACTION_DETAIL_SCREEN,
} from '../constants/screenRoutes';
import TabNavigation from './tab.navigation';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';
const AppStack = createNativeStackNavigator();

const CoreNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={DASHBOARD}
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name={TRANSACTION_DETAIL_SCREEN}
        component={TransactionDetailScreen}
        options={{ presentation: 'modal', headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default CoreNavigation;
