import {
  View,
  Text,
  TouchableWithoutFeedback,
  Pressable,
  SafeAreaView,
  Keyboard,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FOGORTPASSWORD, REGISTER } from '../../constants/screenRoutes';
import assetsObject from '../../constants/assets.ts';
import BigBlueButton from './Components/BigBlueButton';
import validator from 'validator';
import Toast from 'react-native-toast-message';
import { UserContext } from '../../contexts/user.context';
import { login } from '../../Helpers/Service/AuthService';
import {
  apiResponse,
  AuthResponse,
  LoginPayload,
} from '../../Helpers/Interfaces/apiResponse';
import CustomLoadingComponent from '../../components/CustomLoadingComponent';

const LoginScreen = () => {
  const { signInUser } = useContext(UserContext);
  const navigation = useNavigation();
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [icon, setIcon] = useState('eye-off');
  const [textinputBorder, setTextInputBorder] = useState('border-gray-400');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (val) => {
    setTextInputBorder('border-red-700');
    setuserName(val);
  };
  const handlePassword = (val) => {
    setPassword(val);
  };
  const Login = async () => {
    try {
      setIsLoading(true);
      const payload: LoginPayload = {
        username: userName,
        password: password,
      };
      login(payload)
        .then((res: apiResponse<AuthResponse>) => {
          if (res.hasError) {
            setIsLoading(false);
            Toast.show({
              type: 'error',
              text1: 'Login Error',
              text2: res.message,
            });
            return;
          }
          if (!res.data) {
            setIsLoading(false);
            Toast.show({
              type: 'error',
              text1: 'Login Error',
              text2: 'Please try again',
            });
            return;
          }
          saveUser(res.data).then(() => {
            setIsLoading(false);
            Toast.show({
              type: 'success',
              text1: 'Login Success',
              text2: 'Welcome to the app',
            });
          });
        })
        .catch((err) => {
          setIsLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Unknown Error',
            text2: 'Please try again',
          });
        });
    } catch (error) {
      setIsLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Unknown Error',
        text2: 'Please try again',
      });
    }
  };
  const saveUser = async ({
    fullName,
    emailAddress,
    accessToken,
    userId,
  }: AuthResponse) => {
    await signInUser({
      emailAddress,
      accessToken,
      userId,
      fullName,
    });
  };
  const ChangePasswordView = () => {
    setShowPassword((val) => (val = !showPassword));
    setIcon((i) => (i == 'eye-off' ? 'eye' : 'eye-off'));
  };
  const GotoRegister = () => {
    navigation.navigate(REGISTER);
  };

  const CheckValidation = () => {
    if (validator.isEmail(userName)) {
      setTextInputBorder('border-gray-400');
    }
  };

  return (
    <ScrollView>
      <SafeAreaView className='flex-1 mx-4 mt-10 relative'>
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
            Welcome back! Glad to see you, Again!
          </Text>
          <View className='space-y-4'>
            <TextInput
              onChangeText={(text) => {
                handleEmail(text);
              }}
              value={userName}
              onEndEditing={CheckValidation}
              placeholder='Email'
              className={`text-sm border ${textinputBorder} h-[56px] pl-4 bg-inputBackground rounded-md`}
            />
            <View className='border border-[#596369] h-[56px] bg-inputBackground  rounded-md flex flex-row items-center justify-between space-x-2 pl-2 pr-2'>
              <TextInput
                onChangeText={(text) => {
                  handlePassword(text);
                }}
                value={password}
                placeholder='Password'
                className='w-[70%] text-sm'
                secureTextEntry={showPassword}
              />
              <Pressable onPress={ChangePasswordView}>
                <Feather name={icon} size={20} color='black' />
              </Pressable>
            </View>
            <View className='flex flex-row justify-end'>
              <Pressable
                onPress={() => {
                  navigation.navigate(FOGORTPASSWORD);
                }}
                className='w-[40%]'
              >
                <Text className='text-right text-[#6A707C] font-semibold'>
                  Forgot Password?
                </Text>
              </Pressable>
            </View>
          </View>
          <View className='space-y-5'>
            <BigBlueButton action={Login} buttonName='Login' />
            <View className='flex flex-row justify-around'>
              <Image source={assetsObject.line} className='w-[105px] mt-2' />
              <Text className='text-gray-900 text-center font-semibold'>
                Or Login with
              </Text>
              <Image source={assetsObject.line} className='w-[105px] mt-2' />
            </View>
            <View className='flex flex-row space-x-2'>
              <Pressable className='border border-gray-400 rounded-md p-2 w-[32%] flex items-center'>
                <Image source={assetsObject.facebook} />
              </Pressable>
              <Pressable className='border border-gray-400 rounded-md p-2 w-[32%] flex items-center'>
                <Image source={assetsObject.google} className='w-5 h-5' />
              </Pressable>
              <Pressable className='border border-gray-400 rounded-md p-2 w-[32%] flex items-center'>
                <Image source={assetsObject.apple} />
              </Pressable>
            </View>
          </View>
        </View>
        <View className='flex flex-row w-full justify-center mt-10 space-x-2  bottom-8'>
          <Text className='font-normal text-lg'>Already have an account?</Text>
          <Pressable onPress={GotoRegister}>
            <Text className='font-semibold text-lg text-accent'>
              Register Now
            </Text>
          </Pressable>
        </View>
        {isLoading ? <CustomLoadingComponent visible={isLoading} /> : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginScreen;
