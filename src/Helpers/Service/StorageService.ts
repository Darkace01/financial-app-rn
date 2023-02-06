import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key) => {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
export const setItem = async (key, value) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};
export const removeItem = async (key) => {
  return AsyncStorage.removeItem(key);
};
