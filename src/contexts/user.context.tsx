import React, { useState, createContext, useEffect } from 'react';
import { isStringNullOrEmptyOrWhiteSpace } from '../constants/commonHelpers';
import {
  AUTH_TOKEN_KEY,
  SIGNED_IN,
  SIGNED_IN_USER,
} from '../constants/storageConstants';
import { AuthResponse } from '../Helpers/Interfaces/apiResponse';
import { getItem, setItem } from '../Helpers/Service/StorageService';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

  const signInUser = async (user: AuthResponse) => {
    await setItem(AUTH_TOKEN_KEY, user.accessToken);
    await setItem(SIGNED_IN_USER, user);
    setSignedIn(true);
    setUser(user);
  };

  const signOutUser = async () => {
    await setItem(AUTH_TOKEN_KEY, null);
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
