import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';

const ResetPasswordProfile = () => {
  const [oldPassword, setOldPassword] = useState(null)
  const [newPassword, setNewPassword] = useState(null)
  const [retypePassword, setRetypePassword] = useState(null)

  const handleInput = (text: string, handler: any) =>{
    handler(prev => text)
    console.log(text)
  }
  return (
    <View className='flex-1 bg-[#F5F7FF] space-y-4'>
      <View className='mt-16 mx-4 flex flex-row justify-between items-center w-[50%]'>
        <View className='border border-white p-2 rounded-full'>
          <AntDesign name='left' size={20} color='black' />
        </View>
        <Text className='font-bold text-base'>Password</Text>
      </View>
      <View className='space-y-4 mx-4'>
        <View className='h-[64px] bg-white rounded-md'>
          <Text className='text-xs ml-4 mt-3 text-gray-400'>Old Password</Text>
          <TextInput
            value={oldPassword}
            onChangeText={(text: string)=>{
              handleInput(text, setOldPassword)
            }}
            className='ml-4'
            placeholder='Enter old password'
          />
        </View>
        <View className='h-[64px] bg-white rounded-md'>
          <Text className='text-xs ml-4 mt-3 text-gray-400'>New Password</Text>
          <TextInput
            value={newPassword}
            onChangeText={(text: string)=>{
              handleInput(text, setNewPassword)
            }}
            className='ml-4'
            placeholder='Enter new password'
          />
        </View>
        <View className='h-[64px] bg-white rounded-md'>
          <Text className='text-xs ml-4 mt-3 text-gray-400'>Retype New Password</Text>
          <TextInput
            value={retypePassword}
            onChangeText={(text: string)=>{
              handleInput(text, setRetypePassword)
            }}
            className='ml-4'
            placeholder='Retype new password'
          />
        </View>
      </View>
    </View>
  )
}

export default ResetPasswordProfile