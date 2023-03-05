import { useState, useEffect } from 'react';
import { apiResponse, DashboardModel } from '../Helpers/Interfaces/apiResponse';
import { fetchUserDashboard } from '../Helpers/Service/TransactionService';

export const useDashboardFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [dashboard, setDashboard] = useState<DashboardModel>();

  const fetchDashboard = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const dashboard: apiResponse<DashboardModel> = await fetchUserDashboard();
      if (dashboard.hasError === true) {
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

  useEffect(() => {
    fetchDashboard();
  }, []);

  useEffect(() => {
    if (refresh) {
      fetchDashboard();
    }
  }, [refresh]);

  return { dashboard, isLoading, error, setRefresh, refresh };
};
