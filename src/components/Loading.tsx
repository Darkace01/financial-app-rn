import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const Loading = () => {
  return (
    <SafeAreaView className='justify-center items-center '>
      <ActivityIndicator size={'large'} />
    </SafeAreaView>
  );
};

export default Loading;
