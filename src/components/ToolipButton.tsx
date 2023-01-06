import { View, Text } from 'react-native';
import React from 'react';
type Props = {
  text: string;
  active: boolean;
  onclick: () => void;
};
const ToolipButton = ({ text, active, onclick }: Props) => {
  return (
    <View
      className={`${
        active ? 'bg-accent' : 'bg-themeGrey'
      } border-accent border-[1px] rounded-md px-5 py-1 flex items-center justify-center space-x-1 w-[10rem]`}
    >
      <Text className={` ${active ? 'text-white font-bold' : 'text-accent'}`}>
        {text}
      </Text>
    </View>
  );
};

export default ToolipButton;
