import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {
  TRANSACTION_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
} from '../constants/screenRoutes';
import {
  FontAwesome,
  Foundation,
  Ionicons,
  FontAwesome5,
} from '@expo/vector-icons';
import { colors, fonts } from '../constants/globalStyles';
import TransactionScreen from '../screens/TransactionScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // animation: 'slide_from_right',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#FEFEFE',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          height: 65,
          paddingHorizontal: 20,
          paddingBottom: 15,
          paddingTop: 15,
        },
        tabBarVisibilityAnimationConfig: {
          //   animation: 'slide_from_right',
        },
      }}
    >
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <Foundation
                name='home'
                size={focused ? 16 : 18}
                color={focused ? colors.primary : colors.gray}
              />
              {focused && (
                <Text
                  style={{
                    color: colors.primary,
                    fontFamily: fonts.font600,
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={TRANSACTION_SCREEN}
        component={TransactionScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <Ionicons
                name='stats-chart-sharp'
                size={focused ? 16 : 18}
                color={focused ? colors.primary : colors.gray}
              />
              {focused && (
                <Text
                  style={{
                    color: colors.primary,
                    fontFamily: fonts.font600,
                    fontSize: 12,
                  }}
                >
                  Transactions
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <FontAwesome5
                name='user-alt'
                size={focused ? 16 : 18}
                color={focused ? colors.primary : colors.gray}
              />
              {focused && (
                <Text
                  style={{
                    color: colors.primary,
                    fontFamily: fonts.font600,
                    fontSize: 12,
                  }}
                >
                  Profile
                </Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    // position: 'absolute',
    top: Platform.select({
      ios: '30%',
      android: '15%',
    }),
    alignItems: 'center',
  },
});

export default TabNavigation;
