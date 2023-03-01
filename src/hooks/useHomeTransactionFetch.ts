import { useState, useEffect } from 'react';
import { apiResponse, Transaction } from '../Helpers/Interfaces/apiResponse';
import { getUserTransactions } from '../Helpers/Service/TransactionService';

const initialTransactionItems: Transaction[] = [];
export const useHomeTransactionFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [transactionItems, setTransactionItems] = useState<Transaction[]>(
    initialTransactionItems
  );

  const fetchTransactions = async () => {
    try {
      setError(false);
      setIsLoading(true);
      const transactions: apiResponse<Transaction[]> =
        await getUserTransactions('', 5);
      setTransactionItems(transactions.data);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (refresh) {
      fetchTransactions();
      setRefresh(false);
    }
  }, [refresh]);

  return {
    isLoading,
    error,
    refresh,
    setRefresh,
    transactionItems,
  };
};
