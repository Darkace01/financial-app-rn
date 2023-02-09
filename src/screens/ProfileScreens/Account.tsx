import { View, Text, SafeAreaView, Pressable, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Account = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='mt-10 mx-4 space-y-10'>
      <View className='w-[60%] flex flex-row justify-between items-center'>
        <Pressable 
        onPress={()=>{
            navigation.goBack()
        }}
        className='rounded-full bg-white p-3'>
            <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text className='font-bold text-lg'>My Account</Text>
      </View>
      <View className='flex flex-row justify-center'>
        <Pressable 
        onPress={()=>{

        }}
        className='w-32 h-32 rounded-full bg-gray-300 flex flex-row items-center justify-center'>
            <Ionicons name="md-camera-reverse" size={50} color="black" />
        </Pressable>
      </View>
      <View className='space-y-3'>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
            <Text className='text-gray-400'>Name</Text>
            <Text className='font-bold'>Adekunle Adedamola</Text>
        </View>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
            <Text className='text-gray-400'>Email</Text>
            <Text className='font-bold'>ademolav56@gmail.com</Text>
        </View>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
            <Text className='text-gray-400'>Phone Number</Text>
            <Text className='font-bold'>+23408126431390</Text>
        </View>
      </View>
      <View className='bg-white h-20 rounded-md justify-center items-center bg-gray-300'>
        <Text className='text-accent font-bold text-lg'>Save</Text>
      </View>
    </SafeAreaView>
  )
}

export default Account