import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Settings = () => {
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
        <Text className='font-bold text-lg'>Settings</Text>
      </View>
      <View className='space-y-4'>
        <Text className='text-gray-400 text-base'>General</Text>
        <View className='flex flex-row justify-between'>
            <Text className='font-semibold text-base'>Reset Password</Text>
            <AntDesign name="right" size={20} color="black" />
        </View>
        <View className='flex flex-row justify-between'>
            <Text className='font-semibold text-base'>Notifications</Text>
            <AntDesign name="right" size={20} color="black" />
        </View>
      </View>
      <View className='space-y-4'>
        <Text className='text-gray-400 text-base'>Security</Text>
        <View className='flex flex-row justify-between'>
            <Text className='font-semibold text-base'>Privacy Policy</Text>
            <AntDesign name="right" size={20} color="black" />
        </View>
        <Text className='text-gray-400 '>choose what data you share with us</Text>
      </View>
      <View className=' w-full h-[30%] flex flex-row items-end'>
        <Pressable className='rounded-md h-16 w-full border border-gray-400 flex flex-row justify-center items-center'>
            <Text className='text-accent font-bold'>Logout</Text>
        </Pressable>
      </View>
      <Text className='text-gray-300 text-center'>Crown 2023 v10</Text>
    </SafeAreaView>
  )
}

export default Settings