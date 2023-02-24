import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/OnboardingScreens/Splash';
import Onboarding from '../screens/OnboardingScreens/Onboarding';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import OtpScreen from '../screens/AuthScreens/OtpScreen';
import ResetPassword from '../screens/AuthScreens/ResetPassword';
import PasswordChangeSuccessScreen from '../screens/AuthScreens/PasswordChangeSuccessScreen';
import { ONBOARDING, SPLASH } from '../constants/screenRoutes';
import { AppContext } from '../contexts/app.context';
import { getItem } from '../Helpers/Service/StorageService';
import { INTRO_PAGE_VIEWED } from '../constants/storageConstants';

const OnboardingStack = createNativeStackNavigator();

const PublicNavigator = () => {
  const { viewOnboarding } = useContext(AppContext);
  return (
    <>
      {viewOnboarding === true ? (
        <OnboardingStack.Navigator
          headerMode='float'
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'slide_from_right',
          }}
        >
          <OnboardingStack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name='Register'
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name='OtpScreen'
            component={OtpScreen}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name='ResetPassword'
            component={ResetPassword}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name='PasswordChangeSuccessScreen'
            component={PasswordChangeSuccessScreen}
            options={{
              headerShown: false,
            }}
          />
        </OnboardingStack.Navigator>
      ) : (
        <OnboardingStack.Navigator
          headerMode='float'
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'slide_from_right',
          }}
        >
          <OnboardingStack.Screen
            name={ONBOARDING}
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
        </OnboardingStack.Navigator>
      )}
    </>
  );
};

export default PublicNavigator;
