import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    setTimeout(()=>{
        navigation.navigate("Splash2")
    },3000)
  })
  return (
    <SafeAreaView className='flex-1 flex justify-center items-center bg-[#4D2DEC]'>
      <StatusBar/>
      <View className='flex items-center'>
        <Image
            source={require("../../../assets/images/profile.jpg")}
            className='rounded-full'
            style={{
                width:65,
                height:67,
                resizeMode:"contain"
            }}
        />
        <Text className='text-white font-bold text-3xl'>App Name</Text>
        <Text className='text-white'>Fast, Secure, Easy</Text>
      </View>
    </SafeAreaView>
  )
}

export default Splash