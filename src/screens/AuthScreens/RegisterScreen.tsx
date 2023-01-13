import { View, Text, SafeAreaView, Pressable, TextInput, Image, TouchableWithoutFeedback,Keyboard } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import assetsObject from '../../constants/assets'
import { LOGIN } from '../../constants/screenRoutes';
import BigBlueButton from './Components/BigBlueButton';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const handleUsername = (val) =>{
    setUsername(val)
  }
  const handleEmail = (val) =>{
    setEmail(val)
  }
  const handlePassword = (val) =>{
    setPassword(val)
  }
  const handleConfirmPassword = (val) =>{
    setConfirmPassword(val)
  }
  const Register = () =>{

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
            Hello! Register to get started
        </Text>
        <View className='space-y-4'>
            <TextInput
                onChangeText={(text)=>{handleUsername(text)}}
                value={username}
                placeholder="Username"
                className="text-sm border border-gray-400 h-[56px] pl-4 bg-[#E8ECF4] rounded-md"
            />
            <TextInput
                onChangeText={(text)=>{handleEmail(text)}}
                value={Email}
                placeholder="Email"
                className="text-sm border border-gray-400 h-[56px] pl-4 bg-[#E8ECF4] rounded-md"
            />
            <TextInput
                onChangeText={(text)=>{handlePassword(text)}}
                value={Password}
                placeholder="Password"
                className="text-sm border border-gray-400 h-[56px] pl-4 bg-[#E8ECF4] rounded-md"
                secureTextEntry={true}
            />
            <TextInput
                onChangeText={(text)=>{handleConfirmPassword(text)}}
                value={ConfirmPassword}
                placeholder="ConfirmPassword"
                className="text-sm border border-gray-400 h-[56px] pl-4 bg-[#E8ECF4] rounded-md"
                secureTextEntry={true}
            />
        </View>
        <View className='space-y-5'>
          <BigBlueButton action={Register} buttonName="Register"/>
          <View className='flex flex-row justify-around'>
            <Image
              source={assetsObject.line}
              className="w-[105px] mt-2"
            />
            <Text className='text-gray-900 text-center font-semibold'>Or Register with</Text>
            <Image
              source={assetsObject.line}
              className="w-[105px] mt-2"
            />
          </View>  
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
      <View className='flex flex-row w-full justify-center space-x-2 absolute bottom-8'>
        <Text className='font-normal text-lg'>Already have an account?</Text>
        <Pressable onPress={GotoLogin}>
          <Text className='font-semibold text-lg text-accent'>Login Now</Text>
        </Pressable>  
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default RegisterScreen