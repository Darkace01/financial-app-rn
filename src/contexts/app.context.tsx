import React, { createContext, useState, useEffect, useMemo } from 'react';
import { convertDate } from '../constants/commonHelpers';
import { INTRO_PAGE_VIEWED } from '../constants/storageConstants';
import { Transaction } from '../Helpers/Interfaces/apiResponse';
import { getItem, setItem } from '../Helpers/Service/StorageService';
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [viewOnboarding, setViewOnboarding] = useState(false);
  const initialFilterRange = {
    startDate: new Date(),
    endDate: new Date(),
  };
  const [filterRange, setFilterRange] = useState(initialFilterRange);
  const [filterRangeStr, setFilterRangeStr] = useState({});
  const initialTransactionItems: Transaction[] = [];
  const [transactionItems, setTransactionItems] = useState<Transaction[]>(
    initialTransactionItems
  );
  const [searchTerm, setSearchTerm] = useState('');

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

  const cachedTransactionItems = useMemo(() => {
    return transactionItems;
  }, [transactionItems]);

  const value = {
    viewOnboarding,
    handleViewOnboarding,
    filterRange,
    filterRangeStr,
    handleFilterRange,
    transactionItems: cachedTransactionItems,
    setTransactionItems,
    searchTerm,
    setSearchTerm,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
