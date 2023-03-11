import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import BigBlueButton from './Components/BigBlueButton';
import { PASSWORDCHANGESUCCESSSCREEN } from '../../constants/screenRoutes';
import Toast from 'react-native-toast-message';
import OTPTextView from 'react-native-otp-textinput';
import { resetPassword } from '../../Helpers/Service/AuthService';
import {
  apiResponse,
  PasswordResetPayload,
} from '../../Helpers/Interfaces/apiResponse';
import { isEqual } from '../../constants/commonHelpers';
import { colors } from '../../constants/globalStyles';
const width = Dimensions.get('window').width;

const ResetPassword = ({ route, navigation }) => {
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const { resetEmail } = route.params;
  useEffect(() => {
    setEmail(resetEmail || '');
  }, [resetEmail]);

  const handlePassword = (val) => {
    setPassword(val);
  };
  const handleConfirmPassword = (val) => {
    setConfirmPassword(val);
  };

  const handleText = (text) => {
    setOtpInput(text);
  };
  const ResetPassword = () => {
    if (!otpInput) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Invalid code',
      });
      return;
    }
    if (!isEqual(Password, ConfirmPassword)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Passwords do not match',
      });
    }
    const payLoad = {
      email,
      code: otpInput,
      password: Password,
    } as PasswordResetPayload;
    resetPassword(payLoad)
      .then((res: apiResponse<string>) => {
        if (res.hasError) {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: res.message,
          });
        } else {
          navigation.navigate(PASSWORDCHANGESUCCESSSCREEN);
        }
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'An error occured',
        });
      });
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
            Enter the code sent to your mail and create a new password.
          </Text>
        </View>
        <View className='flex flex-row items-center mt-5'>
          <OTPTextView
            handleTextChange={handleText}
            textInputStyle={styles.roundedTextInput}
            containerStyle={styles.textInputContainer}
            inputCount={6}
            inputCellLength={1}
            tintColor={colors.primary}
          />
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

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 5,
    width: width / 1.6,
  },
  roundedTextInput: {
    borderRadius: 5,
    width: '20%',
    height: 60,
    borderWidth: 1,
    fontSize: 20,
    color: colors.primary,
  },
});

export default ResetPassword;
