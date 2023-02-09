import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import Account from '../screens/ProfileScreens/Account';

const profileStack = createNativeStackNavigator();

const ProfileStackNavigation = () => {
  return (
    <profileStack.Navigator initialRouteName='Profile'>
        <profileStack.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
                headerShown: false,
            }}
        />
        <profileStack.Screen
            name='Account'
            component={Account}
            options={{
                headerShown: false,
            }}
        />
    </profileStack.Navigator>
  )
}

export default ProfileStackNavigation