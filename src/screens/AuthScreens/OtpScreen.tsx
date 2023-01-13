import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Pressable, ActivityIndicator  } from 'react-native'
import React, {useState} from 'react'
import OTPTextView from 'react-native-otp-textinput';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BigBlueButton from './Components/BigBlueButton';
import {RESETPASSWORD} from '../../constants/screenRoutes.ts'

const OtpScreen = () => {
  const navigation = useNavigation();
  const [otpInput, setOtpInput] = useState("")
  const [loading , setLoading] = useState(false)

  const handleText = (text) =>{
    setOtpInput(text)
    console.log(otpInput)
  }
  const Verify = () =>{
    setLoading(true)
    setTimeout(() => {
      navigation.navigate(RESETPASSWORD)
    }, 3000);
  }
  const Resend = () =>{

  }
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <SafeAreaView className='flex-1 mx-4 mt-10'>
        <Pressable onPress={()=>{navigation.goBack()}} className='border border-gray-400 rounded-md p-2 w-[40px]'>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <View className='mt-5 space-y-5'>
          <Text className='text-accent text-2xl font-bold max-w-[70%]'>
            OTP Verification
          </Text>
          <Text>
            Enter the verification code we just sent on your email address.
          </Text>
          <View className='flex flex-row items-center'>
            <OTPTextView
                handleTextChange={handleText}
                textInputStyle={styles.roundedTextInput}
                containerStyle={styles.textInputContainer}
                inputCount={4}
                inputCellLength={1}
              />
          </View>
          <View>
            {
              loading === false ?
              <BigBlueButton action={Verify} buttonName="Verify"/>
              :
              <BigBlueButton action={Verify} buttonName={<ActivityIndicator size="small" color="#fff" />}/>
            }
            
          </View>
        </View>
        <View className='flex flex-row w-full justify-center mt-10 space-x-2 absolute bottom-8'>
          <Text className='font-normal text-lg'>Didn’t received code? </Text>
          <Pressable onPress={Resend}>
            <Text className='font-semibold text-lg text-accent'>Resend</Text>
          </Pressable>  
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  textInputContainer: {
      marginBottom: 5,
      width:'100%',
    },
    roundedTextInput: {
      borderRadius: 5,
      width: '20%',
      height:60,
      borderWidth: 4,
      fontSize: 20,
    },
})

export default OtpScreen