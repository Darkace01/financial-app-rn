import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const PublicNavigator = () => {
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  return (
    <View>
      <Text>public-navigator</Text>
    </View>
  );
};

export default PublicNavigator;
