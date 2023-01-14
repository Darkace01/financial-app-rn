import { View, Text, TouchableWithoutFeedback, Keyboard, Image, SafeAreaView } from 'react-native'
import React from 'react'
import assetsObject from '../../constants/assets.ts'
import BigBlueButton from './Components/BigBlueButton'
import { useNavigation } from '@react-navigation/native'
import { LOGIN } from '../../constants/screenRoutes'

const PasswordChangeSuccessScreen = () => {
  const navigation = useNavigation();
  const Login = () =>{
    navigation.navigate(LOGIN)
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <SafeAreaView className='flex-1 flex justify-center items-center mx-4'>
        <View className='flex justify-center items-center space-y-4 '>
            <Image
                source={assetsObject.successMark}
                className='w-[100px] h-[100px]'
            />
            <View>
                <Text className='text-2xl font-bold text-center'>
                    Password Changed!
                </Text>
            </View>
            <Text className=''>
                Your password has been changed successfully.
            </Text>
        </View>
        <View className='mt-5 w-[100%]'>
            <BigBlueButton action={Login} buttonName="Back to Login"/>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default PasswordChangeSuccessScreen