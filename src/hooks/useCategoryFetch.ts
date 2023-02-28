import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../contexts/app.context';
import { UserContext } from '../contexts/user.context';
import { apiResponse, Category } from '../Helpers/Interfaces/apiResponse';
import { getUserCategories } from '../Helpers/Service/CategoryService';

export const useCategoryFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      setError(false);
      setIsLoading(true);
      const categories: apiResponse<Category[]> = await getUserCategories();
      setCategories(categories.data);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (refresh) {
      fetchCategories();
      setRefresh(false);
    }
  }, [refresh]);

  return {
    isLoading,
    error,
    refresh,
    setRefresh,
    categories,
  };
};
