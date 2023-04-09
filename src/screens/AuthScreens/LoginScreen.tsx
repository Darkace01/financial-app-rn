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
  TouchableOpacity,
} from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
  FOGORTPASSWORD,
  OTPSCREEN,
  REGISTER,
} from '../../constants/screenRoutes';
import BigBlueButton from './Components/BigBlueButton';
import Toast from 'react-native-toast-message';
import { UserContext } from '../../contexts/user.context';
import {
  login,
  loginOrRegisterWithGoogle,
} from '../../Helpers/Service/AuthService';
import {
  apiResponse,
  AuthResponse,
  LoginPayload,
} from '../../Helpers/Interfaces/apiResponse';
import CustomLoadingComponent from '../../components/CustomLoadingComponent';
import { getItem } from '../../Helpers/Service/StorageService';
import { SIGNED_IN_USER } from '../../constants/storageConstants';
import { isStringNullOrEmptyOrWhiteSpace } from '../../constants/commonHelpers';

import * as Google from 'expo-auth-session/providers/google';
const LoginScreen = () => {
  const { signInUser } = useContext(UserContext);
  const navigation = useNavigation();
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [icon, setIcon] = useState('eye-off');
  const [textinputBorder, setTextInputBorder] = useState('border-gray-400');
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const signedInUser = async () => {
      const user = await getItem(SIGNED_IN_USER);
      // const { firstName, emailAddress } = user as AuthResponse;
      setFirstName(user?.firstName || '');
      handleUserName(user?.emailAddress || '');
    };
    signedInUser();
  }, []);

  const handleUserName = (val: string) => {
    setuserName(val);
  };
  const handlePassword = (val: string) => {
    setPassword(val);
  };

  const clearStates = () => {
    setuserName('');
    setPassword('');
  };

  const Login = async () => {
    try {
      setIsLoading(true);
      const payload: LoginPayload = {
        username: userName,
        password: password,
      };
      login(payload).then((res: apiResponse<AuthResponse>) => {
        if (res.hasError) {
          setIsLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Login Error',
            text2: res.message,
          });

          if (res.message === 'Email not confirmed') {
            clearStates();
            navigation.navigate(OTPSCREEN, { emailAddress: userName });
          }
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
          clearStates();
          Toast.show({
            type: 'success',
            text1: 'Login Success',
            text2: `Welcome back ${res?.data?.firstName}`,
          });
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
  const saveUser = async (payload: AuthResponse) => {
    await signInUser(payload);
  };
  const ChangePasswordView = () => {
    setShowPassword((val) => (val = !showPassword));
    setIcon((i) => (i == 'eye-off' ? 'eye' : 'eye-off'));
  };
  const GotoRegister = () => {
    navigation.navigate(REGISTER);
  };
  const [request, response, promptAsync] = Google.useAuthRequest({
    //TODO: Pick from .env file
    androidClientId:
      '916977843040-0e3demrf7vh0asnii1lpq4p2n7najpj4.apps.googleusercontent.com',
    expoClientId:
      '916977843040-nrncesmq80cl3kiv66ldgt5gk0s40942.apps.googleusercontent.com',
  });
  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.idToken);
      loginWithGoogle();
    }
  }, [response, accessToken]);

  const loginWithGoogle = async () => {
    try {
      if (isStringNullOrEmptyOrWhiteSpace(accessToken)) return;
      setIsLoading(true);
      loginOrRegisterWithGoogle(accessToken).then(
        (res: apiResponse<AuthResponse>) => {
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
            clearStates();
            Toast.show({
              type: 'success',
              text1: 'Login Success',
              text2: `Welcome back ${res?.data?.firstName}`,
            });
          });
        }
      );
    } catch (error) {
      setIsLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Unknown Error',
        text2: 'Please try again',
      });
    }
  };

  const handleSignInWithGoogle = async () => {
    await promptAsync({ showInRecents: true });
  };

  const checkUsernameAndPassword = () => {
    if (
      !isStringNullOrEmptyOrWhiteSpace(userName) &&
      !isStringNullOrEmptyOrWhiteSpace(password)
    ) {
      return true;
    }
    return false;
  };

  return (
    <ScrollView>
      <SafeAreaView className='flex-1 mx-4 mt-10 relative'>
        {/* <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          className='border border-gray-400 rounded-md p-2 w-[40px]'
        >
          <Ionicons name='chevron-back' size={24} color='black' />
        </Pressable> */}
        <View className='mt-5 space-y-5'>
          <Text className='text-accent text-2xl font-bold max-w-[70%]'>
            Welcome back {firstName}! Glad to see you.
          </Text>
          <View className='space-y-4'>
            {isStringNullOrEmptyOrWhiteSpace(firstName) ? (
              <TextInput
                onChangeText={(text) => {
                  handleUserName(text);
                }}
                value={userName}
                placeholder='Username or Email Address'
                className={`text-sm border ${textinputBorder} h-14 pl-4 bg-inputBackground rounded-md`}
              />
            ) : (
              <View className='flex flex-row justify-between items-center'>
                <Text className='text-sm font-semibold text-gray-900'>
                  No, I am not {firstName}!
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setFirstName('');
                  }}
                >
                  <Text className='text-sm font-semibold text-accent'>
                    Change
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <View
              className={`border ${textinputBorder} h-14 bg-inputBackground  rounded-md flex flex-row items-center justify-between space-x-2 pl-2 pr-2`}
            >
              <TextInput
                onChangeText={(text) => {
                  handlePassword(text);
                }}
                value={password}
                placeholder='Password'
                className='w-[70%] text-sm pl-2'
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
            <View className='flex flex-row justify-center'>
              <Text className='text-gray-900 text-center font-semibold'>
                Or Login with
              </Text>
            </View>
            <View className='flex flex-row space-x-2'>
              <TouchableOpacity
                className='border border-gray-400 rounded-md p-2 flex flex-row justify-center items-center w-full space-x-2 h-12'
                onPress={handleSignInWithGoogle}
              >
                <FontAwesome5 name='google' size={20} color='black' />
                <Text className='text-gray-900 text-center font-semibold'>
                  Login-In With Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className='flex flex-row w-full justify-center mt-10 space-x-2  bottom-8'>
          <Text className='font-normal text-base'>Don't have an account?</Text>
          <Pressable
            onPress={GotoRegister}
            disabled={checkUsernameAndPassword() === true}
          >
            <Text className='font-semibold text-base text-accent'>
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
