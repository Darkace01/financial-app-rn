import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Modal from './Components/Modal'
import { useNavigation } from '@react-navigation/native'
import { SPLASH5, SPLASH3 } from '../../constants/screenRoutes'

const Splash2 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 flex justify-center items-center bg-accent'>
      <Pressable onPress={()=>{navigation.navigate(SPLASH5)}} className='top-10 right-4 absolute bg-[#684CEE] p-1 rounded-full w-[61px]'>
        <Text className='text-center text-white'>Skip</Text>
      </Pressable >
      <View className='rounded-lg'>
        <Modal 
            title="You ought to know where your money goes"
            body="Get an overview of how you are performing and motivate yourself to achieve even more."
            screen={SPLASH3}
            image="first"
        />
      </View>
    </SafeAreaView>
  )
}

export default Splash2