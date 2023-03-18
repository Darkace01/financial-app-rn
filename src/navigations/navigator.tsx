import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoreNavigation from './app.navigation';
import PublicNavigator from './public-navigator';
import Loading from '../components/Loading';
import { UserContext } from '../contexts/user.context';
import { isStringNullOrEmptyOrWhiteSpace } from '../constants/commonHelpers';
import { getItem } from '../Helpers/Service/StorageService';
import { AUTH_TOKEN_KEY } from '../constants/storageConstants';

const AppNavigation = () => {
  const { signedIn, setSignedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const checkSignedIn = async () => {
      const token = await getItem(AUTH_TOKEN_KEY);
      if (!isStringNullOrEmptyOrWhiteSpace(token)) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
      setLoading(false);
    };
    checkSignedIn();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {signedIn ? <CoreNavigation /> : <PublicNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
