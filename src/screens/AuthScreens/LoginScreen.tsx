import { View, Text, TouchableWithoutFeedback,Pressable, SafeAreaView, Keyboard, TextInput, Image } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {FOGORTPASSWORD, REGISTER} from '../../constants/screenRoutes';
import assetsObject from "../../constants/assets.ts";
import BigBlueButton from './Components/BigBlueButton';
import validator from 'validator';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)
  const [icon, setIcon] = useState("eye-off")
  const [textinputBorder, setTextInputBorder] = useState("border-gray-400")
  

  const handleEmail = (val) =>{
    setTextInputBorder("border-red-700")
    setEmail(val)
  }
  const handlePassword = (val) =>{
    setPassword(val)
  }
  const Login = () =>{
    if(validator.isEmail(Email)){
      console.log("Login")
    }else{
      Toast.show(
        {
          type: 'error',
          text1: 'Validation Error',
          text2: "Email must be valid"
        })
    }
    
  }
  const ChangePasswordView = () => {
    setShowPassword(val => val = !showPassword)
    setIcon(i => i == "eye-off" ? "eye" : "eye-off")
  }
  const GotoRegister = () =>{
    navigation.navigate(REGISTER)
  }

  const CheckValidation = () =>{
    if(validator.isEmail(Email))
    {
      setTextInputBorder("border-gray-400")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <SafeAreaView className='flex-1 mx-4 mt-10'>
        <Pressable onPress={()=>{navigation.goBack()}} className='border border-gray-400 rounded-md p-2 w-[40px]'>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <View className='mt-5 space-y-5'>
          <Text className='text-accent text-2xl font-bold max-w-[70%]'>
            Welcome back! Glad to see you, Again!
          </Text>
          <View className='space-y-4'>
              <TextInput
                  onChangeText={(text)=>{handleEmail(text)}}
                  value={Email}
                  onEndEditing={CheckValidation}
                  placeholder="Email"
                  className={`text-sm border ${textinputBorder} h-[56px] pl-4 bg-[#E8ECF4] rounded-md`}
              />
              <View className="border border-[#596369] h-[56px] bg-[#E8ECF4]  rounded-md flex flex-row items-center justify-between space-x-2 pl-2 pr-2">
                <TextInput
                    onChangeText={(text)=>{handlePassword(text)}}
                    value={Password}
                    placeholder="Password"
                    className="w-[70%] text-sm"
                    secureTextEntry={showPassword}
                />
                <Pressable onPress={ChangePasswordView}>
                  <Feather name={icon} size={20} color="black" />
                </Pressable>
              </View>
              <View className='flex flex-row justify-end'>
                <Pressable onPress={()=>{navigation.navigate(FOGORTPASSWORD)}} className='w-[40%]'>
                  <Text className='text-right text-[#6A707C] font-semibold'>Forgot Password?</Text>
                </Pressable>
              </View>         
          </View>
          <View className='space-y-5'>
            <BigBlueButton action={Login} buttonName="Login"/>
            <View className='flex flex-row justify-around'>
              <Image
                source={assetsObject.line}
                className="w-[105px] mt-2"
              />
              <Text className='text-gray-900 text-center font-semibold'>Or Login with</Text>
              <Image
                source={assetsObject.line}
                className="w-[105px] mt-2"
              />
          </View>
          <View className='flex flex-row space-x-2'>
            <Pressable className='border border-gray-400 rounded-md p-2 w-[32%] flex items-center'>
              <Image
                source={assetsObject.facebook}
              />
            </Pressable>
            <Pressable className='border border-gray-400 rounded-md p-2 w-[32%] flex items-center'>
              <Image
                source={assetsObject.google}
                className="w-5 h-5"
              />
            </Pressable>
            <Pressable className='border border-gray-400 rounded-md p-2 w-[32%] flex items-center'>
              <Image
                source={assetsObject.apple}
              />
            </Pressable>
          </View>  
          </View>
        </View>
        <View className='flex flex-row w-full justify-center mt-10 space-x-2 absolute bottom-8'>
          <Text className='font-normal text-lg'>Already have an account?</Text>
          <Pressable onPress={GotoRegister}>
            <Text className='font-semibold text-lg text-accent'>Register Now</Text>
          </Pressable>  
      </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen