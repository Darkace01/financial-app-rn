import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DASHBOARD,
  ONBOARDING,
  TRANSACTION_CREATION_MODAL,
  TRANSACTION_DETAIL_MODAL,
} from '../constants/screenRoutes';
import TabNavigation from './tab.navigation';
// import TransactionDetailScreen from '../screens/TransactionDetailScreen';
import TransactionDetailModal from '../modals/TransactionDetailModal';
import TransactionModal from '../modals/TransactionModal';
import Onboarding from '../screens/OnboardingScreens/Onboarding';
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
        name={TRANSACTION_DETAIL_MODAL}
        component={TransactionDetailModal}
        options={{ presentation: 'modal', headerShown: false }}
      />
      <AppStack.Screen
        name={TRANSACTION_CREATION_MODAL}
        component={TransactionModal}
        options={{ presentation: 'modal', headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default CoreNavigation;
