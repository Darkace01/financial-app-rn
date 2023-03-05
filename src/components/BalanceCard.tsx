import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../contexts/user.context';
import { AuthResponse } from '../Helpers/Interfaces/apiResponse';
import Currency from 'react-currency-formatter';
// get screen height
const screenHeight = Dimensions.get('window').height;
const BalanceCard = () => {
  const { user } = useContext(UserContext);
  const { clientBalance, firstName } = user as AuthResponse;
  return (
    <View
      className={`bg-accent w-full rounded-lg shadow-lg p-5 justify-between`}
      style={{
        height: screenHeight / 5,
      }}
    >
      <View className='space-y-3'>
        <View className='flex flex-row justify-between align-middle items-center'>
          <View>
            <Text className={`text-white text-lg font-[${fonts.font700}]`}>
              {' '}
              {firstName}'s Balance
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Ionicons name='ios-share-outline' size={18} color='white' />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            className={`text-white font-extrabold text-3xl font-[${fonts.font700}]`}
          >
            {' '}
            <Currency quantity={clientBalance?.balance} currency='NGN' />
            {/* ₦{clientBalance?.balance} */}
          </Text>
        </View>
      </View>
      <View className='bottom-0'>
        <Text className={`text-slate-300 text-xs font-[${fonts.font700}]`}>
          {' '}
          {clientBalance?.percentage}% increase from last month
        </Text>
      </View>
    </View>
  );
};

export default BalanceCard;
