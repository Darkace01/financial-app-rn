import { useState, useEffect, useMemo, useContext } from 'react';
import { convertDate, getPrevious7DaysDate } from '../constants/commonHelpers';
import { AppContext } from '../contexts/app.context';
import { apiResponse, Transaction } from '../Helpers/Interfaces/apiResponse';
import { getUserTransactions } from '../Helpers/Service/TransactionService';

// const initialTransactionItems: Transaction[] = [];

export const useTransactionFetch = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [take, setTake] = useState(50);
  const lastWeek = convertDate(getPrevious7DaysDate());
  const today = convertDate(new Date());
  const [startDate, setStartDate] = useState(lastWeek);
  const [endDate, setEndDate] = useState(today);
  const initialTransactionItems: Transaction[] = [];
  const [transactionItems, setTransactionItems] = useState<Transaction[]>(
    initialTransactionItems
  );

  const { filterRangeStr, searchTerm } = useContext(AppContext);

  useEffect(() => {
    if (filterRangeStr) {
      setStartDate(filterRangeStr.startDate);
      setEndDate(filterRangeStr.endDate);
    }
  }, [filterRangeStr]);

  const fetchTransactions = async (
    searchTerm: string,
    take: number,
    startDate: string,
    endDate: string
  ) => {
    try {
      setIsLoading(true);
      setError(false);
      const transactions: apiResponse<Transaction[]> =
        await getUserTransactions(searchTerm, take, startDate, endDate);
      setTransactionItems(transactions.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions(searchTerm, take, startDate, endDate);
  }, [searchTerm, take, startDate, endDate]);

  useEffect(() => {
    if (refresh) {
      fetchTransactions(searchTerm, take, startDate, endDate);
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    return () => {
      fetchTransactions(searchTerm, take, startDate, endDate);
    };
  }, []);

  const cachedTransactionItems = useMemo(() => {
    return transactionItems;
  }, [transactionItems]);

  return {
    searchTerm,
    isLoading,
    error,
    take,
    setTake,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    transactionItems: cachedTransactionItems,
    refresh,
    setRefresh,
  };
};
