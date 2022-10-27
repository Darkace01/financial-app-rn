import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DASHBOARD } from '../constants/screenRoutes';
import TabNavigation from './tab.navigation';
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
      {/* <AppStack.Screen
        name={RESTAURANT_MODAL}
        component={RestaurantModal}
        options={{ presentation: 'modal', headerShown: false }}
      /> */}
    </AppStack.Navigator>
  );
};

export default CoreNavigation;
