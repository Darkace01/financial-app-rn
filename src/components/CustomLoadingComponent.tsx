import React from 'react';
import { ActivityIndicator, Modal, Text, View } from 'react-native';
import { colors } from '../constants/globalStyles';

type Props = {
  visible: boolean;
  message?: string;
};

const CustomLoadingComponent = ({ visible, message = 'Loading...' }: Props) => {
  return (
    <Modal transparent onRequestClose={() => null} visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            borderRadius: 10,
            backgroundColor: colors.shadowBg,
            padding: 25,
          }}
        >
          <ActivityIndicator
            animating={visible}
            size='large'
            color={colors.accent}
          />
          <Text>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default CustomLoadingComponent;
