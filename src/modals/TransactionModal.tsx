import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationTopBar from '../components/NavigationTopBar';
import { fonts } from '../constants/globalStyles';
import { SelectList } from 'react-native-dropdown-select-list';

const TransactionModal = () => {
  const [selected, setSelected] = React.useState('');

  const data = [
    { key: '1', value: 'Mobiles' },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers' },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ];
  return (
    <SafeAreaView className='bg-white h-full mx-auto px-5'>
      <NavigationTopBar withFilter={false} text='Money In' />
      <View>
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
              data={data}
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
      </View>
    </SafeAreaView>
  );
};

export default TransactionModal;
