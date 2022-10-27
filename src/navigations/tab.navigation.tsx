import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {
  ANALYTICS_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
} from '../constants/screenRoutes';
import { FontAwesome } from '@expo/vector-icons';
import { colors, fonts } from '../constants/globalStyles';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // animation: 'slide_from_right',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#F6F6F9',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          height: 78,
          paddingHorizontal: 40,
          paddingBottom: 20,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
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
              <FontAwesome
                name='home'
                size={18}
                color={focused ? colors.primary : '#848484'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? colors.primary : '#848484',
                fontFamily: fonts.primary,
                fontSize: 12,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={ANALYTICS_SCREEN}
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <FontAwesome
                name='list-ol'
                size={18}
                color={focused ? colors.primary : '#848484'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? colors.primary : '#848484',
                fontFamily: fonts.primary,
                fontSize: 12,
              }}
            >
              Order
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <FontAwesome
                name='user-o'
                size={18}
                color={focused ? colors.primary : '#848484'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? colors.primary : '#848484',
                fontFamily: fonts.primary,
                fontSize: 12,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    top: Platform.select({
      ios: '30%',
      android: '15%',
    }),
  },
});

export default TabNavigation;
