import React, { createContext, useState, useEffect } from 'react';
import { INTRO_PAGE_VIEWED } from '../constants/storageConstants';
import { getItem, setItem } from '../Helpers/Service/StorageService';
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [viewOnboarding, setViewOnboarding] = useState(false);

  const handleViewOnboarding = async () => {
    await setItem(INTRO_PAGE_VIEWED, true);
    setViewOnboarding(true);
  };
  const checkOnboarding = async () => {
    const introPageViewed = await getItem(INTRO_PAGE_VIEWED);
    if (viewOnboarding === true && introPageViewed === 'true') {
      setViewOnboarding(true);
    }
  };
  useEffect(() => {
    checkOnboarding();
  }, []);

  useEffect(() => {
    checkOnboarding();
  }, [viewOnboarding]);

  const value = {
    viewOnboarding,
    handleViewOnboarding,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
