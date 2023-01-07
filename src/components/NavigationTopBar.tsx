import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { fonts } from '../constants/globalStyles';
import { useNavigation } from '@react-navigation/native';
type Props = {
  withFilter?: boolean;
  text?: string;
  onclick?: () => void;
};
const NavigationTopBar = ({ withFilter, text, onclick }: Props) => {
  const navigation = useNavigation();
  return (
    <View className='flex flex-row justify-between mx-auto mb-4 items-center mt-2'>
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons name='chevron-back' size={20} color='black' />
      </TouchableOpacity>
      <View>
        <Text className={`text-base font-[${fonts.font700}]`}>
          {text ? text : 'Transactions'}
        </Text>
      </View>
      {withFilter ? (
        <TouchableOpacity onPress={onclick}>
          <FontAwesome5 name='filter' size={18} color='black' />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default NavigationTopBar;
