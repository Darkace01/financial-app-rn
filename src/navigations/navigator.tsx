import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoreNavigation from './app.navigation';
import PublicNavigator from './public-navigator';
import Loading from '../components/Loading';

const AppNavigation = () => {
  const isLogged = false;
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {isLogged ? <CoreNavigation /> : <PublicNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
