import React, { useState, createContext, useEffect } from 'react';
import { SIGNED_IN } from '../constants/storageConstants';
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

  const signInUser = async (user) => {
    await setItem(SIGNED_IN, true);
    setSignedIn(true);
    setUser(user);
  };

  const singOutUser = async () => {
    await setItem(SIGNED_IN, false);
    setSignedIn(false);
    setUser(null);
  };

  const value = { user, setUser, signInUser, signedIn, setSignedIn };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
