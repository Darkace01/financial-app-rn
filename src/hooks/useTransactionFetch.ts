import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/app.context';
import { apiResponse, Transaction } from '../Helpers/Interfaces/apiResponse';
import { getUserTransactions } from '../Helpers/Service/TransactionService';

const initialTransactionItems: Transaction[] = [];
export const useTransactionFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [take, setTake] = useState(50);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [transactionItems, setTransactionItems] = useState<Transaction[]>(
    initialTransactionItems
  );

  //App Context
  const { filterRangeStr, handleFilterRange } = useContext(AppContext);

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
      setError(false);
      setIsLoading(true);
      const transactions: apiResponse<Transaction[]> =
        await getUserTransactions(searchTerm, take, startDate, endDate);
      setTransactionItems(transactions.data);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
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

  return {
    searchTerm,
    setSearchTerm,
    isLoading,
    error,
    take,
    setTake,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    transactionItems,
    setTransactionItems,
    refresh,
    setRefresh,
  };
};
