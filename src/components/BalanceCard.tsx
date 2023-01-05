import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { Ionicons } from '@expo/vector-icons';
// get screen height
const screenHeight = Dimensions.get('window').height;
const cardHeight = `${screenHeight / 4}px`;
const BalanceCard = () => {
  return (
    <View
      className={`bg-accent w-full h-44 rounded-lg shadow-lg p-5 justify-between`}
    >
      <View className='space-y-3'>
        <View className='flex flex-row justify-between align-middle items-center'>
          <View>
            <Text className={`text-white text-lg font-[${fonts.font700}]`}>
              {' '}
              Total Balance
            </Text>
          </View>
          <View>
            <Ionicons name='ios-share-outline' size={18} color='white' />
          </View>
        </View>
        <View>
          <Text
            className={`text-white font-extrabold text-3xl font-[${fonts.font700}]`}
          >
            {' '}
            #300,000.00
          </Text>
        </View>
      </View>
      <View className='bottom-0'>
        <Text className={`text-slate-300 text-xs font-[${fonts.font700}]`}>
          {' '}
          1.5% increase from last week
        </Text>
      </View>
    </View>
  );
};

export default BalanceCard;
