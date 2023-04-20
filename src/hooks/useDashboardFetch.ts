import { useState, useEffect } from 'react';
import { AUTH_TOKEN_KEY } from '../constants/storageConstants';
import {
  apiResponse,
  BasicUser,
  DashboardModel,
} from '../Helpers/Interfaces/apiResponse';
import { removeItem } from '../Helpers/Service/StorageService';
import { fetchUserDashboard } from '../Helpers/Service/TransactionService';
import { getUserBasicDetails } from '../Helpers/Service/UserService';

export const useDashboardFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [refresh, setRefresh] = useState(false);
  const [dashboard, setDashboard] = useState<DashboardModel>();
  const [user, setUser] = useState<BasicUser>(null);

  const fetchDashboard = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const dashboard: apiResponse<DashboardModel> = await fetchUserDashboard();
      if (dashboard.hasError === true) {
        setErrorMessage(dashboard?.message);
        setError(true);
      } else {
        setDashboard(dashboard.data);
      }
      setRefresh(false);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
      setRefresh(false);
    }
  };

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const userResponse: apiResponse<BasicUser> = await getUserBasicDetails();
      if (userResponse.hasError === true) {
        setErrorMessage(userResponse?.message);
        setError(true);
      } else {
        setUser(userResponse.data);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
      setRefresh(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
    fetchUser();
  }, []);

  useEffect(() => {
    if (refresh) {
      fetchDashboard();
      fetchUser();
    }
  }, [refresh]);

  return {
    dashboard,
    isLoading,
    error,
    setRefresh,
    refresh,
    user,
    errorMessage,
    setIsLoading,
  };
};
