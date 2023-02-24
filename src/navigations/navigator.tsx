import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoreNavigation from './app.navigation';
import PublicNavigator from './public-navigator';
import Loading from '../components/Loading';
import { UserContext } from '../contexts/user.context';

const AppNavigation = () => {
  const { signedIn, user } = useContext(UserContext);
  const isLogged = signedIn && user !== null;
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
