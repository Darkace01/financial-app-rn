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
import {
  FOGORTPASSWORD,
  LOGIN_SCREEN,
  ONBOARDING,
  OTPSCREEN,
  PASSWORDCHANGESUCCESSSCREEN,
  REGISTER,
  RESETPASSWORD,
  SPLASH,
} from '../constants/screenRoutes';
import { AppContext } from '../contexts/app.context';
import { getItem } from '../Helpers/Service/StorageService';
import { INTRO_PAGE_VIEWED } from '../constants/storageConstants';
import CustomLoadingComponent from '../components/CustomLoadingComponent';

const OnboardingStack = createNativeStackNavigator();

const PublicNavigator = () => {
  const [loading, setLoading] = React.useState(true);
  const { setViewOnboarding, viewOnboarding } = useContext(AppContext);

  useEffect(() => {
    getItem(INTRO_PAGE_VIEWED)
      .then((value) => {
        setLoading(false);
        if (value) {
          setViewOnboarding(true);
        }
      })
      .catch(() => {});
  }, []);

  if (loading) return <CustomLoadingComponent visible={loading} />;

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
            name={LOGIN_SCREEN}
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name={REGISTER}
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name={FOGORTPASSWORD}
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name={OTPSCREEN}
            component={OtpScreen}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name={RESETPASSWORD}
            component={ResetPassword}
            options={{
              headerShown: false,
            }}
          />
          <OnboardingStack.Screen
            name={PASSWORDCHANGESUCCESSSCREEN}
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
