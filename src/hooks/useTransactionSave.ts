import React, { useEffect, useState } from 'react';
import { apiResponse, Transaction } from '../Helpers/Interfaces/apiResponse';
import { saveUserTransaction } from '../Helpers/Service/TransactionService';

export const useTransactionSave = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [savingError, setSavingError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const saveTransaction = async (transaction: Transaction) => {
    try {
      setSavingError(false);
      setIsSaving(true);
      const response: apiResponse<string> = await saveUserTransaction(
        transaction
      );
      if (response.statusCode !== 200) {
        setSavingError(true);
        setErrorMessage(response.message);
        return false;
      }
      return true;
    } catch (error) {
      setSavingError(true);
      setErrorMessage('An error occurred while saving the transaction');
    }
    setIsSaving(false);
    return false;
  };
  const handleSaveTransaction = async (transaction: Transaction) => {
    setSavingError(false);
    setIsSaving(true);
    return await saveTransaction(transaction);
  };

  return {
    isSaving,
    savingError,
    handleSaveTransaction,
    errorMessage,
  };
};
