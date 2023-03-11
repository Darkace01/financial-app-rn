import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BigBlueButton from './Components/BigBlueButton';
import { LOGIN, RESETPASSWORD } from '../../constants/screenRoutes';
import Toast from 'react-native-toast-message';
import CustomLoadingComponent from '../../components/CustomLoadingComponent';
import { requestPasswordReset } from '../../Helpers/Service/AuthService';
import { apiResponse } from '../../Helpers/Interfaces/apiResponse';
import { isValidEmail } from '../../constants/commonHelpers';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [textinputBorder, setTextInputBorder] = useState('border-gray-400');

  const handleEmail = (val) => {
    setTextInputBorder('border-red-700');
    setEmail(val);
  };
  const sendCode = () => {
    if (isValidEmail(Email)) {
      setLoading(true);
      requestPasswordReset(Email)
        .then((res: apiResponse<string>) => {
          setLoading(false);
          if (res.hasError) {
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: res.message,
            });
          } else {
            navigation.navigate(RESETPASSWORD, {
              resetEmail: Email,
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'An error occured',
          });
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Email must be valid',
      });
    }
  };
  const GotoLogin = () => {
    navigation.navigate(LOGIN);
  };
  const CheckValidation = () => {
    if (isValidEmail(Email)) {
      setTextInputBorder('border-gray-400');
    }
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
            Forgot Password?
          </Text>
          <Text>
            Don't worry! It occurs. Please enter the email address linked with
            your account.
          </Text>
          <View className='space-y-8'>
            <TextInput
              onChangeText={(text) => {
                handleEmail(text);
              }}
              onEndEditing={CheckValidation}
              value={Email}
              placeholder='Enter your email'
              className={`text-sm border ${textinputBorder} h-[56px] pl-4 bg-inputBackground rounded-md`}
            />
            <View>
              {loading === false ? (
                <BigBlueButton action={sendCode} buttonName='Send Code' />
              ) : (
                <BigBlueButton
                  action={sendCode}
                  buttonName={<ActivityIndicator size='small' color='#fff' />}
                />
              )}
            </View>
          </View>
        </View>
        <View className='flex flex-row w-full justify-center mt-10 space-x-2 absolute bottom-8'>
          <Text className='font-normal text-lg'>Already have an account?</Text>
          <Pressable onPress={GotoLogin}>
            <Text className='font-semibold text-lg text-accent'>Login</Text>
          </Pressable>
        </View>
        {loading ? <CustomLoadingComponent visible={loading} /> : null}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
