import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import assetsObject from '../../constants/assets';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/screenRoutes';

const Splash5 = () => {
  const navigation = useNavigation();
  const CreateAccount = () =>{
    navigation.navigate(REGISTER)
  }

  const Login = () =>{

  }
  return (
    <SafeAreaView className='flex-1 flex items-center justify-center bg-accent'>
      <Image
        source={assetsObject.splashImage}
        className="w-[350px] h-[350px]"
      />
      <View className='mt-10 space-y-6'>
        <View className='bg-white w-[241px] h-[61px] flex justify-center rounded-lg'>
          <Pressable onPress={CreateAccount}>
            <Text className='text-accent font-bold text-lg text-center'>Create Account</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={Login}>
            <Text className='text-white text-center text-xl'>Already a member?</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Splash5