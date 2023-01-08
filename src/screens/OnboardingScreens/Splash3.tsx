import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Modal from './Components/Modal'
import { useNavigation } from '@react-navigation/native'

const Splash3 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 flex justify-center items-center bg-[#4D2DEC]'>
      <Pressable onPress={()=>{navigation.navigate('Splash5')}} className='top-10 right-4 absolute bg-[#684CEE] p-1 rounded-full w-[61px]'>
        <Text className='text-center text-white'>Skip</Text>
      </Pressable>
      <View className='rounded-lg'>
        <Modal 
            title="You ought to know where your money goes"
            body="Track your transaction easily, with categories and financial report"
            screen='Splash4'
            image='second'
        />
      </View>
    </SafeAreaView>
  )
}

export default Splash3