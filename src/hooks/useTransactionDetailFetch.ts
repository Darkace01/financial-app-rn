import { useState, useEffect } from 'react';
import { apiResponse, Transaction } from '../Helpers/Interfaces/apiResponse';
import { fetchUserTransactionById } from '../Helpers/Service/TransactionService';

export const useTransactionDetailFetch = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [transaction, setTransaction] = useState<Transaction>();

  const fetchTransaction = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const transaction: apiResponse<Transaction> =
        await fetchUserTransactionById(id);
      setTransaction(transaction.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  useEffect(() => {
    if (refresh) {
      fetchTransaction();
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    fetchTransaction();
  }, [id]);

  return { transaction, isLoading, error, refresh };
};
