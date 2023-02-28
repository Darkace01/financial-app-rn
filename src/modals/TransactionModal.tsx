import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationTopBar from '../components/NavigationTopBar';
import { fonts } from '../constants/globalStyles';
import { SelectList } from 'react-native-dropdown-select-list';
import { Category, Transaction } from '../Helpers/Interfaces/apiResponse';
import { useCategoryFetch } from '../hooks/useCategoryFetch';
import CustomLoadingComponent from '../components/CustomLoadingComponent';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useTransactionSave } from '../hooks/useTransactionSave';
import { useNavigation } from '@react-navigation/native';

const TransactionModal = ({ route, navigation }) => {
  const { categories, isLoading, error } = useCategoryFetch();
  const { handleSaveTransaction, isSaving, savingError, errorMessage } =
    useTransactionSave();
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const { moneyIn } = route.params;

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

  if (savingError) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: errorMessage,
    });
  }

  const handleSubmit = async () => {
    const data = {
      title,
      description,
      amount,
      categoryId: selectedCategory,
      inFlow: moneyIn || false,
    } as Transaction;
    const isSaved = await handleSaveTransaction(data);
    if (isSaved) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Transaction saved successfully',
      });
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView className='bg-white h-full mx-auto px-5 w-full'>
      <NavigationTopBar
        withFilter={false}
        text={moneyIn ? 'Money In' : 'Money Out'}
      />
      <View className='space-y-5'>
        <View>
          <Text className={`text-base font-[${fonts.font700}]`}>Title</Text>
          <View className='flex flex-row bg-themeGrey py-2 px-3 rounded-md items-center my-1'>
            <TextInput
              placeholder='Food from bukka'
              className='ml-1 px-1 w-full'
              onChangeText={(val) => setTitle(val)}
              value={title}
            />
          </View>
        </View>
        <View className='flex flex-col'>
          <Text className={`text-base font-[${fonts.font700}]`}>Category</Text>
          <View>
            <SelectList
              setSelected={(val) => setSelectedCategory(val)}
              data={categoriesData}
              save='key'
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
              onChangeText={(val) => setDescription(val)}
              value={description}
            />
          </View>
        </View>
        <View className='flex flex-col'>
          <Text className={`text-base font-[${fonts.font700}]`}>Amount</Text>
          <View className='flex flex-row bg-themeGrey py-2 px-3 rounded-md items-center my-1'>
            <TextInput
              placeholder='₦ 0.00'
              className='ml-1 px-1 w-full'
              keyboardType='numbers-and-punctuation'
              onChangeText={(val) => setAmount(Number(val))}
              value={amount.toString()}
            />
          </View>
        </View>
        <View className='flex flex-col'>
          <TouchableOpacity
            className='bg-accent py-3 rounded-md mt-5'
            onPress={handleSubmit}
          >
            <Text className='text-center text-white font-[${fonts.font700}]'>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isLoading || isSaving ? (
        <CustomLoadingComponent visible={isLoading || isSaving} />
      ) : null}
    </SafeAreaView>
  );
};

export default TransactionModal;
