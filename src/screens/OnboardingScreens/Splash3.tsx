import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Modal from './Components/Modal'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../constants/globalStyles'
import { SPLASH5, SPLASH4 } from '../../constants/screenRoutes'

const Splash3 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className={`flex-1 flex justify-center items-center bg-accent`}>
      <Pressable onPress={()=>{navigation.navigate(SPLASH5)}} className='top-10 right-4 absolute bg-[#684CEE] p-1 rounded-full w-[61px]'>
        <Text className='text-center text-white'>Skip</Text>
      </Pressable>
      <View className='rounded-lg'>
        <Modal 
            title="Gain total
            control of your money"
            body="Track your transaction easily, with categories and financial report"
            screen={SPLASH4}
            image='second'
        />
      </View>
    </SafeAreaView>
  )
}

export default Splash3