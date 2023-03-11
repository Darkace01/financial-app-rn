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
import CurrencyInput from 'react-native-currency-input';
import { convertDate, getNumberFromString } from '../constants/commonHelpers';
import DateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

const TransactionModal = ({ route, navigation }) => {
  const { categories, isLoading, error } = useCategoryFetch();
  const { handleSaveTransaction, isSaving, savingError, errorMessage } =
    useTransactionSave();
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [fieldAmount, setfieldAmount] = React.useState(null);
  const [amount, setAmount] = React.useState('');
  const [dateTime, setDateTime] = React.useState(new Date());
  const [openDateTimePicker, setOpenDateTimePicker] = React.useState(false);
  const [dateTimeString, setDateTimeString] = React.useState(
    new Date().toDateString()
  );
  const { moneyIn } = route.params;

  const categoriesData = categories.map((category: Category) => {
    return { key: category.id, value: category.title };
  });

  const handleShowDateTimePicker = () => {
    setOpenDateTimePicker(true);
  };

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    if (event.type === 'dismissed') {
      setOpenDateTimePicker(false);
      return;
    }
    setDateTime(date);
    setDateTimeString(date.toDateString());
    setOpenDateTimePicker(false);
  };

  const handleSubmit = async () => {
    const formattedAmount = getNumberFromString(amount);
    if (title && formattedAmount > 0 && selectedCategory > 0) {
      const data = {
        title,
        description,
        amount: formattedAmount,
        categoryId: selectedCategory,
        inFlow: moneyIn || false,
        dateAdded: convertDate(dateTime),
      } as Transaction;
      const isSaved = await handleSaveTransaction(data);
      if (isSaved) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Transaction saved successfully',
        });
        navigation.goBack();
      } else {
        if (savingError) {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: errorMessage || 'Something went wrong',
          });
        }
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill all fields',
      });
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
          <Text className={`text-base font-[${fonts.font700}]`}>Date</Text>
          <View className='flex flex-row bg-themeGrey py-2 px-3 rounded-md items-center my-1'>
            <TouchableOpacity onPress={handleShowDateTimePicker}>
              <View className='ml-1 px-1 w-full py-2'>
                <Text className=''>{dateTimeString}</Text>
              </View>
            </TouchableOpacity>
            {openDateTimePicker && (
              <DateTimePicker
                testID='dateTimePicker'
                value={dateTime}
                mode='date'
                is24Hour={true}
                onChange={handleDateChange}
              />
            )}
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
            {/* <TextInput
              placeholder='₦ 0.00'
              className='ml-1 px-1 w-full'
              keyboardType='numbers-and-punctuation'
              onChangeText={(val) => setAmount(Number(val))}
              value={amount.toString()}
            /> */}
            <CurrencyInput
              className='ml-1 px-1 w-full'
              value={fieldAmount}
              onChangeValue={setfieldAmount}
              prefix='₦'
              delimiter=','
              separator='.'
              precision={2}
              onChangeText={(formattedValue) => {
                // setAmountError("");
                let tempAmt = formattedValue ?? '0';
                setAmount(tempAmt);
              }}
              keyboardType='decimal-pad'
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
