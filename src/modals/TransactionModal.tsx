import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationTopBar from '../components/NavigationTopBar';
import { fonts } from '../constants/globalStyles';
import { SelectList } from 'react-native-dropdown-select-list';
import { Category } from '../Helpers/Interfaces/apiResponse';
import { useCategoryFetch } from '../hooks/useCategoryFetch';
import CustomLoadingComponent from '../components/CustomLoadingComponent';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const TransactionModal = () => {
  const { categories, isLoading, error } = useCategoryFetch();
  const [selected, setSelected] = React.useState('');

  const categoriesData = categories.map((category: Category) => {
    return { key: category.id, value: category.title };
  });
  if (error) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Something went wrong',
    });
  }
  return (
    <SafeAreaView className='bg-white h-full mx-auto px-5 w-full'>
      <NavigationTopBar withFilter={false} text='Money In' />
      <View className='space-y-5'>
        <View>
          <Text className={`text-base font-[${fonts.font700}]`}>Title</Text>
          <View className='flex flex-row bg-themeGrey py-2 px-3 rounded-md items-center my-1'>
            <TextInput
              placeholder='Food from bukka'
              className='ml-1 px-1 w-full'
            />
          </View>
        </View>
        <View className='flex flex-col'>
          <Text className={`text-base font-[${fonts.font700}]`}>Category</Text>
          <View>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={categoriesData}
              save='value'
              boxStyles={{
                backgroundColor: '#F5F7FF',
                borderRadius: 10,
                height: 50,
                width: '100%',
                marginTop: 10,
                borderWidth: 0,
              }}
            />
          </View>
        </View>
        <View className='flex flex-col'>
          <Text className={`text-base font-[${fonts.font700}]`}>
            Decription
          </Text>
          <View className='flex flex-row bg-themeGrey  rounded-md items-start my-1'>
            <TextInput
              placeholder='What I really bought'
              className='ml-2 px-1 w-full p-2'
              multiline
              numberOfLines={4}
            />
          </View>
        </View>
        <View className='flex flex-col'>
          <Text className={`text-base font-[${fonts.font700}]`}>Amount</Text>
          <View className='flex flex-row bg-themeGrey py-2 px-3 rounded-md items-center my-1'>
            <TextInput
              placeholder='₦ 0.00'
              className='ml-1 px-1 w-full'
              keyboardType='numeric'
            />
          </View>
        </View>
        <View className='flex flex-col'>
          <TouchableOpacity className='bg-accent py-3 rounded-md mt-5'>
            <Text className='text-center text-white font-[${fonts.font700}]'>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isLoading ? <CustomLoadingComponent visible={isLoading} /> : null}
    </SafeAreaView>
  );
};

export default TransactionModal;
