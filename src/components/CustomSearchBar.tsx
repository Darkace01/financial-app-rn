import { View, TextInput } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTransactionFetch } from '../hooks/useTransactionFetch';
import { AppContext } from '../contexts/app.context';
import { isStringNullOrEmptyOrWhiteSpace } from '../constants/commonHelpers';

const CustomSearchBar = () => {
  const { setSearchTerm } = useContext(AppContext);
  const { setRefresh } = useTransactionFetch();

  const [searchText, setSearchText] = useState<string>('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchText);
      setRefresh(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <View className='flex flex-row bg-themeGrey py-4 px-3 rounded-full items-center'>
      <Feather name='search' size={24} color='grey' />
      <TextInput
        placeholder='Search'
        className='ml-2 px-1 w-11/12'
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
    </View>
  );
};

export default CustomSearchBar;
