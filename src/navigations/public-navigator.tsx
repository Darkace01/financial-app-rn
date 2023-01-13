import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/OnboardingScreens/Splash';
import Splash2 from '../screens/OnboardingScreens/Splash2';
import Splash3 from '../screens/OnboardingScreens/Splash3';
import Splash4 from '../screens/OnboardingScreens/Splash4';
import Splash5 from '../screens/OnboardingScreens/Splash5';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import OtpScreen from '../screens/AuthScreens/OtpScreen';
import ResetPassword from '../screens/AuthScreens/ResetPassword';
import PasswordChangeSuccessScreen from '../screens/AuthScreens/PasswordChangeSuccessScreen';

const OnboardingStack = createNativeStackNavigator();

const PublicNavigator = () => {
  
  return (
    <OnboardingStack.Navigator initialRouteName='LoginScreen'>
      <OnboardingStack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="Splash2"
        component={Splash2}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="Splash3"
        component={Splash3}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="Splash4"
        component={Splash4}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="Splash5"
        component={Splash5}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingStack.Screen
        name="PasswordChangeSuccessScreen"
        component={PasswordChangeSuccessScreen}
        options={{
          headerShown: false,
        }}
      />
    </OnboardingStack.Navigator>
  );
};

export default PublicNavigator;
