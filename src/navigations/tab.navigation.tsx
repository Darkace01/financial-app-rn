import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {
  ANALYTICS_SCREEN,
  CARD_SCREEN,
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
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CardScreen from '../screens/CardScreen';

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
          backgroundColor: '#F6F6F9',
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
                size={20}
                color={focused ? colors.primary : colors.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ANALYTICS_SCREEN}
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <Ionicons
                name='stats-chart-sharp'
                size={18}
                color={focused ? colors.primary : colors.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={CARD_SCREEN}
        component={CardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <FontAwesome
                name='credit-card-alt'
                size={18}
                color={focused ? colors.primary : colors.gray}
              />
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
                size={18}
                color={focused ? colors.primary : colors.gray}
              />
            </View>
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
