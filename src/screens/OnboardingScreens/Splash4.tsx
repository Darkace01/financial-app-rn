import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Modal from './Components/Modal'
import { useNavigation } from '@react-navigation/native'
import { SPLASH5 } from '../../constants/screenRoutes'

const Splash4 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 flex justify-center items-center bg-accent'>
      <Pressable onPress={()=>{navigation.navigate(SPLASH5)}} className='top-10 right-4 absolute bg-[#684CEE] p-1 rounded-full w-[61px]'>
        <Text className='text-center text-white'>Skip</Text>
      </Pressable>
      <View className='rounded-lg'>
        <Modal 
            title="Plan ahead and manage your money better"
            body="Setup your budget for each category
            so you in control. Track categories you spend the most money on."
            screen='Splash5'
            image="third"
        />
      </View>
    </SafeAreaView>
  )
}

export default Splash4