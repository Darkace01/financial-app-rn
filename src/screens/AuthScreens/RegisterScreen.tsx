import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import assetsObject from '../../constants/assets';
import { LOGIN, OTPSCREEN } from '../../constants/screenRoutes';
import BigBlueButton from './Components/BigBlueButton';
import Toast from 'react-native-toast-message';
import CustomLoadingComponent from '../../components/CustomLoadingComponent';
import {
  apiResponse,
  AuthResponse,
  RegisterPayload,
} from '../../Helpers/Interfaces/apiResponse';
import {
  loginOrRegisterWithGoogle,
  register,
} from '../../Helpers/Service/AuthService';
import {
  isEqual,
  isStringNullOrEmptyOrWhiteSpace,
  isValidEmail,
} from '../../constants/commonHelpers';
import { UserContext } from '../../contexts/user.context';
import * as Google from 'expo-auth-session/providers/google';
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [textinputBorder, setTextInputBorder] = useState('border-gray-400');
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [checklist, setChecklist] = useState([
    { label: 'At least 6 characters', done: false },
    { label: 'Contains a capital letter', done: false },
    { label: 'Contains a number', done: false },
    { label: 'Contains a special character', done: false },
  ]);

  const { signInUser } = useContext(UserContext);

  const handleUsername = (val) => {
    setUsername(val);
  };
  const handleEmail = (val) => {
    setTextInputBorder('border-red-700');
    setEmail(val);
  };
  const handlePassword = (val) => {
    setPassword(val);

    // Update checklist
    const updatedChecklist = [...checklist];
    updatedChecklist[0].done = val.length >= 6;
    updatedChecklist[1].done = /[A-Z]/.test(val);
    updatedChecklist[2].done = /\d/.test(val);
    updatedChecklist[3].done = /[@$!%*#?&]/.test(val);
    setChecklist(updatedChecklist);
  };
  const handleConfirmPassword = (val) => {
    setConfirmPassword(val);
  };
  const GotoLogin = () => {
    navigation.navigate(LOGIN);
  };
  const GotoOTP = () => {
    navigation.navigate(OTPSCREEN, {
      emailAddress: Email,
    });
  };

  const handleRegister = () => {
    if (isValidEmail(Email) && isEqual(Password, ConfirmPassword)) {
    } else {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Email must be valid and passwords must match',
      });
    }
    try {
      setIsLoading(true);
      const payload: RegisterPayload = {
        email: Email,
        password: Password,
        firstName: firstname,
        lastName: lastname,
        phoneNumber: phoneNumber,
        userName: username,
      };
      register(payload)
        .then((res: apiResponse<string>) => {
          if (res.hasError) {
            setIsLoading(false);
            Toast.show({
              type: 'error',
              text1: 'Register Error',
              text2: res.message,
            });
          } else {
            setIsLoading(false);
            Toast.show({
              type: 'success',
              text1: 'Register Success',
              text2: res.message,
            });
            GotoOTP();
          }
        })
        .catch((err) => {
          setIsLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Register Error',
            text2: err.message,
          });
        });
    } catch (error) {
      setIsLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Register Error',
        text2: error.message,
      });
    }
  };
  const CheckValidation = () => {
    if (isValidEmail(Email)) {
      setTextInputBorder('border-gray-400');
    }
  };
  const [request, response, promptAsync] = Google.useAuthRequest({
    //TODO: Pick from .env file
    androidClientId:
      '916977843040-0e3demrf7vh0asnii1lpq4p2n7najpj4.apps.googleusercontent.com',
  });
  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken('');
      setAccessToken(response.authentication.idToken);
      registerWithGoogle();
    }
  }, [response, accessToken]);

  const registerWithGoogle = async () => {
    try {
      if (isStringNullOrEmptyOrWhiteSpace(accessToken)) return;
      setIsLoading(true);
      loginOrRegisterWithGoogle(accessToken).then(
        (res: apiResponse<AuthResponse>) => {
          if (res.hasError) {
            setIsLoading(false);
            Toast.show({
              type: 'error',
              text1: 'Register Error',
              text2: res.message,
            });
            return;
          }
          if (!res.data) {
            setIsLoading(false);
            Toast.show({
              type: 'error',
              text1: 'Register Error',
              text2: 'Please try again',
            });
            return;
          }
          signInUser(res.data).then(() => {
            setIsLoading(false);
            Toast.show({
              type: 'success',
              text1: 'Register Success',
              text2: `Welcome ${res?.data?.firstName}`,
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

  const handleSignUpWithGoogle = async () => {
    await promptAsync({ showInRecents: true });
  };
  return (
    <ScrollView>
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
            <Text className='text-accent text-2xl font-bold'>
              Hello! Register to get started
            </Text>
            <View className='space-y-4'>
              <TextInput
                onChangeText={(text) => {
                  handleUsername(text);
                }}
                value={username}
                placeholder='Username'
                className='text-sm border border-gray-400 h-[56px] pl-4 bg-inputBackground rounded-md'
              />
              <TextInput
                onChangeText={(text) => {
                  setFirstname(text);
                }}
                value={firstname}
                placeholder='First Name'
                className='text-sm border border-gray-400 h-[56px] pl-4 bg-inputBackground rounded-md'
              />
              <TextInput
                onChangeText={(text) => {
                  setLastname(text);
                }}
                value={lastname}
                placeholder='Last Name'
                className='text-sm border border-gray-400 h-[56px] pl-4 bg-inputBackground rounded-md'
              />
              <TextInput
                onChangeText={(text) => {
                  handleEmail(text);
                }}
                value={Email}
                onEndEditing={CheckValidation}
                placeholder='Email'
                className={`text-sm border ${textinputBorder} h-[56px] pl-4 bg-inputBackground rounded-md`}
              />
              <TextInput
                onChangeText={(text) => {
                  setPhoneNumber(text);
                }}
                value={phoneNumber}
                placeholder='Phone Number'
                className='text-sm border border-gray-400 h-[56px] pl-4 bg-inputBackground rounded-md'
              />
              <TextInput
                onChangeText={(text) => {
                  handlePassword(text);
                }}
                value={Password}
                placeholder='Password'
                className='text-sm border border-gray-400 h-[56px] pl-4 bg-inputBackground rounded-md'
                secureTextEntry={true}
              />
              <View className='flex-col flex-wrap items-start'>
                {checklist.map((item, index) => (
                  <View key={index} className='flex-row items-center my-2 mr-4'>
                    <Text
                      className={
                        item.done
                          ? `text-gray-400 line-through`
                          : `text-gray-700`
                      }
                    >
                      {item.label}
                    </Text>
                    {item.done ? (
                      <View className='bg-accent rounded-full w-4 h-4 ml-2' />
                    ) : (
                      <View className='border border-gray-300 rounded-full w-4 h-4 ml-2' />
                    )}
                  </View>
                ))}
              </View>
              <TextInput
                onChangeText={(text) => {
                  handleConfirmPassword(text);
                }}
                value={ConfirmPassword}
                placeholder='ConfirmPassword'
                className='text-sm border border-gray-400 h-[56px] pl-4 bg-inputBackground rounded-md'
                secureTextEntry={true}
              />
            </View>
            <View className='space-y-5'>
              <BigBlueButton action={handleRegister} buttonName='Register' />
              <View className='flex flex-row justify-around'>
                <Image source={assetsObject.line} className='w-[105px] mt-2' />
                <Text className='text-gray-900 text-center font-semibold'>
                  Or Register with
                </Text>
                <Image source={assetsObject.line} className='w-[105px] mt-2' />
              </View>
            </View>
            <View className='flex flex-row space-x-2'>
              <TouchableOpacity
                className='border border-gray-400 rounded-md p-2 flex flex-row justify-center items-center w-full space-x-2 h-12'
                onPress={handleSignUpWithGoogle}
              >
                <FontAwesome5 name='google' size={20} color='black' />
                <Text className='text-gray-900 text-center font-semibold'>
                  Register With Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className='flex flex-row w-full justify-center space-x-2 my-4'>
            <Text className='font-normal text-base'>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={GotoLogin}>
              <Text className='font-semibold text-base text-accent'>
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      {isLoading ? <CustomLoadingComponent visible={isLoading} /> : null}
    </ScrollView>
  );
};

export default RegisterScreen;
