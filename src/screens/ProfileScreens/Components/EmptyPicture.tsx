import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EmptyPicture = ({pickImageAsync}) => {
  const navigation = useNavigation();
  return (
    <Pressable 
    onPress={()=>{
        pickImageAsync()
    }}
    className='w-32 h-32 rounded-full bg-gray-300 flex flex-row items-center justify-center'>
        <Ionicons name="md-camera-reverse" size={50} color="black" />
    </Pressable>
  )
}

export default EmptyPicture