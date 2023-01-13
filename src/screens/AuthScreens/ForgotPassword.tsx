import { View, Text, SafeAreaView, Pressable, TouchableWithoutFeedback, Keyboard, TextInput, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BigBlueButton from './Components/BigBlueButton';
import { OTPSCREEN, LOGIN } from '../../constants/screenRoutes';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState("")
  const [loading , setLoading] = useState(false)

  const handleEmail = (val) =>{
    setEmail(val)
  }
  const sendCode = () =>{
    setLoading(true)
    setTimeout(() => {
      navigation.navigate(OTPSCREEN)
    }, 3000);
  }
  const GotoLogin = () =>{
    navigation.navigate(LOGIN)
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <SafeAreaView className='flex-1 mx-4 mt-10'>
        <Pressable onPress={()=>{navigation.goBack()}} className='border border-gray-400 rounded-md p-2 w-[40px]'>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <View className='mt-5 space-y-5'>
          <Text className='text-accent text-2xl font-bold max-w-[70%]'>
            Forgot Password?
          </Text>
          <Text>
            Don't worry! It occurs. Please enter the email address linked with your account.
          </Text>
          <View className='space-y-8'>
            <TextInput
                onChangeText={(text)=>{handleEmail(text)}}
                value={Email}
                placeholder="Enter your email"
                className="text-sm border border-gray-400 h-[56px] pl-4 bg-[#E8ECF4] rounded-md"
            />
            <View>
              {
                loading === false ?
                <BigBlueButton action={sendCode} buttonName="Send Code"/>
                :
                <BigBlueButton action={sendCode} buttonName={<ActivityIndicator size="small" color="#fff" />}/>
              }
            </View>
          </View>
        </View>
        <View className='flex flex-row w-full justify-center mt-10 space-x-2 absolute bottom-8'>
          <Text className='font-normal text-lg'>Already have an account?</Text>
          <Pressable onPress={GotoLogin}>
            <Text className='font-semibold text-lg text-accent'>Login</Text>
          </Pressable>  
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ForgotPassword