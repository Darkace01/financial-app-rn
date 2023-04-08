import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import Account from '../screens/ProfileScreens/Account';
import Settings from '../screens/ProfileScreens/Settings';
import ResetPasswordProfile from '../screens/ProfileScreens/ResetPasswordProfile';
import {
  ACCOUNT_SCREEN,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
  RESET_PASSWORD_PROFILE
} from '../constants/screenRoutes';

const profileStack = createNativeStackNavigator();

const ProfileStackNavigation = () => {
  return (
    <profileStack.Navigator initialRouteName={PROFILE_SCREEN}>
      <profileStack.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <profileStack.Screen
        name={ACCOUNT_SCREEN}
        component={Account}
        options={{
          headerShown: false,
        }}
      />
      <profileStack.Screen
        name={SETTINGS_SCREEN}
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <profileStack.Screen
        name={RESET_PASSWORD_PROFILE}
        component={ResetPasswordProfile}
        options={{
          headerShown: false,
        }}
      />
    </profileStack.Navigator>
  );
};

export default ProfileStackNavigation;
