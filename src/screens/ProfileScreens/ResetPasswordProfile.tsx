import { View, Text, TextInput, Pressable } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import CustomLoadingComponent from '../../components/CustomLoadingComponent';
import { ResetPasswordProfilePayload,ResetPasswordProfileResponse, apiResponse } from '../../Helpers/Interfaces/apiResponse';
import { UserContext } from '../../contexts/user.context';
import { useDashboardFetch } from '../../hooks/useDashboardFetch';
import { changePassword } from '../../Helpers/Service/AuthService';
import { useNavigation } from '@react-navigation/native';
import { SETTINGS_SCREEN } from '../../constants/screenRoutes';

const ResetPasswordProfile = () => {
  const { setUser } = useContext(UserContext);
  const [oldPassword, setOldPassword] = useState(null)
  const [newPassword, setNewPassword] = useState(null)
  const [retypePassword, setRetypePassword] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useDashboardFetch()
  const navigation = useNavigation()
  

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  const handleChangePassword = () =>{
    try {
      setIsLoading(true)
      const payload : ResetPasswordProfilePayload = {
        "username": user.emailAddress,
        "currentPassword": oldPassword,
        "newPassword": newPassword
      };
      changePassword(payload).then((res: apiResponse<ResetPasswordProfileResponse>) => {
        if (res.hasError) {
          setIsLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Password change error',
            text2: res.message,
          });
        }
        if (!res.data) {
          setIsLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Login Error',
            text2: 'Please try again',
          });
          return;
        }

        if (res.data){
          setIsLoading(false);
          Toast.show({
            type: 'success',
            text1: 'Password change Success',
            text2: 'Your password has been changed successfully',
          });
          navigation.navigate(SETTINGS_SCREEN)
        }
      })
    } catch (error) {
      
    }
  }

  const handleOldPassword = (text: string) =>{
    setOldPassword(text)
  }

  const handleNewPassword = (text: string) =>{
    setNewPassword(text)
  }

  const handleRetypePassword = (text: string) =>{
    setRetypePassword(text)
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
              handleOldPassword(text)
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
              handleNewPassword(text)
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
              handleRetypePassword(text)
            }}
            className='ml-4'
            placeholder='Retype new password'
          />
        </View>
      </View>
      <View className='h-[40%] flex flex-col justify-end mx-4'>
          <Pressable 
            className='h-[64px] bg-[#E9E9FF] items-center justify-center rounded-md'
            onPress={handleChangePassword}
          >
              <Text className='text-[#4A44C6] font-bold text-lg'>Save</Text>
          </Pressable>
      </View>
      {isLoading ? <CustomLoadingComponent visible={isLoading} /> : null}
    </View>
  )
}

export default ResetPasswordProfile