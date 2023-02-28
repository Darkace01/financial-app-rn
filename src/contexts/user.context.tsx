import React, { useState, createContext, useEffect } from 'react';
import { AUTH_TOKEN_KEY, SIGNED_IN } from '../constants/storageConstants';
import { AuthResponse } from '../Helpers/Interfaces/apiResponse';
import { getItem, setItem } from '../Helpers/Service/StorageService';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [introViewed, setIntroViewed] = useState(false);

  useEffect(() => {
    const checkSignedIn = async () => {
      const isSignedIn = await getItem(SIGNED_IN);
      if (isSignedIn) {
        setSignedIn(true);
      }
    };
    checkSignedIn();
  }, []);

  const signInUser = async (user: AuthResponse) => {
    await setItem(SIGNED_IN, true);
    await setItem(AUTH_TOKEN_KEY, user.accessToken);
    setSignedIn(true);
    setUser(user);
  };

  const signOutUser = async () => {
    await setItem(SIGNED_IN, false);
    await setItem(AUTH_TOKEN_KEY, '');
    setSignedIn(false);
    setUser(null);
  };

  const value = {
    user,
    setUser,
    signInUser,
    signedIn,
    setSignedIn,
    signOutUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
