import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { colors } from '../constants/globalStyles';

const Loading = () => {
  return (
    <SafeAreaView>
      <ActivityIndicator size={'large'} color={colors.accent} />
    </SafeAreaView>
  );
};

export default Loading;
