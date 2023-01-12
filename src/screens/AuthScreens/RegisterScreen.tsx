import { View, Text, SafeAreaView, Pressable, TextInput, Image } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import assetsObject from '../../constants/assets'

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
  return (
    <SafeAreaView className='mx-4 mt-10'>
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
          <Pressable 
              className='bg-accent h-[56px] flex justify-center rounded-md'
              onPress={Register}
            >
            <Text className='text-center font-semibold text-white'>Register</Text>
          </Pressable>
          <Text className='text-gray-900 text-center font-semibold'>Or Register with</Text>
        </View>
        <View className='flex flex-row'>
          <Pressable className='border border-gray-400 rounded-md p-2 w-[33%] flex items-center'>
            <Image
              source={assetsObject.facebook}
            />
          </Pressable>
          <Pressable className='border border-gray-400 rounded-md p-2 w-[33%] flex items-center'>
            <Image
              source={assetsObject.google}
              className="w-5 h-5"
            />
          </Pressable>
          <Pressable className='border border-gray-400 rounded-md p-2 w-[33%] flex items-center'>
            <Image
              source={assetsObject.apple}
            />
          </Pressable>
        </View>
      </View>
      <View className='flex flex-row justify-center mt-10'>
        <Text className='font-normal text-lg'>Already have an account?</Text>
        <Text className='font-semibold text-lg text-accent'>Login Now</Text>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen