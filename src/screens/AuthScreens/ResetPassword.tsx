import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BigBlueButton from './Components/BigBlueButton';
import { PASSWORDCHANGESUCCESSSCREEN } from '../../constants/screenRoutes';

const ResetPassword = () => {
  const navigation = useNavigation();
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const handlePassword = (val) => {
    setPassword(val);
  };
  const handleConfirmPassword = (val) => {
    setConfirmPassword(val);
  };
  const ResetPassword = () => {
    navigation.navigate(PASSWORDCHANGESUCCESSSCREEN);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView className='flex-1 mx-4 mt-10'>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          className='border border-gray-400 rounded-md p-2 w-[40px]'
        >
          <Ionicons name='chevron-back' size={24} color='black' />
        </Pressable>
        <View className='mt-5 space-y-5'>
          <Text className='text-accent text-2xl font-bold max-w-[70%]'>
            Create new password
          </Text>
          <Text>
            Your new password must be unique from those previously used.
          </Text>
        </View>
        <View className='mt-5 space-y-8'>
          <TextInput
            onChangeText={(text) => {
              handlePassword(text);
            }}
            value={Password}
            placeholder='Password'
            className='text-sm border border-gray-400 h-[56px] pl-4 bg-inputBackground rounded-md'
            secureTextEntry={true}
          />
          <TextInput
            onChangeText={(text) => {
              handleConfirmPassword(text);
            }}
            value={ConfirmPassword}
            placeholder='Confirm Password'
            className='text-sm border border-gray-400 h-[56px] pl-4 bg-inputBackground rounded-md'
            secureTextEntry={true}
          />
          <View>
            <BigBlueButton action={ResetPassword} buttonName='Reset Password' />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ResetPassword;
