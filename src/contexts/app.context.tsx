import React, { createContext, useState, useEffect, useMemo } from 'react';
import { convertDate, getPrevious7DaysDate } from '../constants/commonHelpers';
import { INTRO_PAGE_VIEWED } from '../constants/storageConstants';
import { Category, Transaction } from '../Helpers/Interfaces/apiResponse';
import { getItem, setItem } from '../Helpers/Service/StorageService';
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [viewOnboarding, setViewOnboarding] = useState(false);
  const initialFilterRange = {
    startDate: getPrevious7DaysDate(),
    endDate: new Date(),
  };
  const initialCategories: Category[] = [];

  const [filterRange, setFilterRange] = useState(initialFilterRange);
  const [filterRangeStr, setFilterRangeStr] = useState({});

  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<Category[]>(initialCategories);

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

  const handleFilterRange = (startDate: Date, endDate: Date) => {
    setFilterRange({ startDate, endDate });
  };

  useEffect(() => {
    if (filterRange) {
      const { startDate, endDate } = filterRange;
      const startDateStr = convertDate(startDate);
      const endDateStr = convertDate(endDate);
      setFilterRangeStr({ startDate: startDateStr, endDate: endDateStr });
    }
  }, [filterRange]);

  const value = {
    viewOnboarding,
    handleViewOnboarding,
    filterRange,
    filterRangeStr,
    handleFilterRange,
    searchTerm,
    setSearchTerm,
    categories,
    setCategories,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
