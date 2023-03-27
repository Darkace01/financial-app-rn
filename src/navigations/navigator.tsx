import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoreNavigation from './app.navigation';
import PublicNavigator from './public-navigator';
import Loading from '../components/Loading';
import { UserContext } from '../contexts/user.context';
import { isStringNullOrEmptyOrWhiteSpace } from '../constants/commonHelpers';
import { getItem } from '../Helpers/Service/StorageService';
import {
  AUTH_TOKEN_KEY,
  LAST_TIME_TOKEN_REFRESHED,
} from '../constants/storageConstants';

const AppNavigation = () => {
  const { signedIn, setSignedIn, signOutUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const checkSignedIn = async () => {
      const token = await getItem(AUTH_TOKEN_KEY);
      const lastTimeTokenRefreshed = await getItem(LAST_TIME_TOKEN_REFRESHED);
      if (!isStringNullOrEmptyOrWhiteSpace(token)) {
        if (!isStringNullOrEmptyOrWhiteSpace(lastTimeTokenRefreshed)) {
          const currentTime = new Date().getTime();
          const lastTime = parseInt(lastTimeTokenRefreshed);
          const diff = currentTime - lastTime;
          if (diff > 360000) {
            // token expired
            signOutUser();
          }
        } else {
          signOutUser();
        }
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
