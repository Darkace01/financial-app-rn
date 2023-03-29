import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
type Props = {
  moneyIn: boolean;
  action: () => void;
};

const ActionButton = ({ action, moneyIn }: Props) => {
  return (
    <TouchableOpacity onPress={action}>
      <View
        className={` ${
          moneyIn ? 'bg-accent' : 'bg-white'
        } py-2 px-3 rounded-md flex flex-row items-center space-x-1 min-w-[10rem] border-accent border-solid border-[1px]`}
      >
        {moneyIn ? (
          <FontAwesome5 name='plus-circle' size={12} color='white' />
        ) : (
          <FontAwesome5 name='minus-circle' size={12} color='#4D2DEC' />
        )}
        <Text className={`${moneyIn ? 'text-white' : 'text-accent'}  text-xs`}>
          {moneyIn ? 'Income' : 'Expense'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActionButton;
