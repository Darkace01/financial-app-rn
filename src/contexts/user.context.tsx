import React, { useState, createContext, useEffect } from 'react';
import { isStringNullOrEmptyOrWhiteSpace } from '../constants/commonHelpers';
import {
  AUTH_TOKEN_KEY,
  LAST_TIME_TOKEN_REFRESHED,
  SIGNED_IN,
  SIGNED_IN_USER,
} from '../constants/storageConstants';
import {
  AuthResponse,
  BasicUser,
  ProfilePictureResponse,
} from '../Helpers/Interfaces/apiResponse';
import { getItem, setItem } from '../Helpers/Service/StorageService';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<BasicUser | null>(null);
  const [signedIn, setSignedIn] = useState(false);

  const signInUser = async (user: AuthResponse) => {
    await setItem(AUTH_TOKEN_KEY, user.accessToken);
    await setItem(SIGNED_IN_USER, user);
    await setItem(LAST_TIME_TOKEN_REFRESHED, new Date().getTime().toString());
    setSignedIn(true);
    setUser(user);
  };

  const signOutUser = async () => {
    await setItem(AUTH_TOKEN_KEY, null);
    await setItem(LAST_TIME_TOKEN_REFRESHED, null);
    setSignedIn(false);
    setUser(null);
  };

  const updateUserProfilePicture = async (payload: ProfilePictureResponse) => {
    const updatedUser = {
      ...user,
      profilePictureUrl: payload.fileUrl,
      profilePictureId: payload.publicId,
    } as BasicUser;
    await setItem(SIGNED_IN_USER, updatedUser);
    setUser(updatedUser);
  };

  const value = {
    user,
    setUser,
    signInUser,
    signedIn,
    setSignedIn,
    signOutUser,
    updateUserProfilePicture,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
