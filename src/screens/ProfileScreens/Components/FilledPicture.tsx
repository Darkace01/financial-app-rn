import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const FilledPicture = ({uri,pickImageAsync}) => {
  return (
    <View>
      <Image
        source={require("../../../../assets/images/damola.png")}
        className='rounded-full w-28 h-28'
        style={{
            resizeMode: 'contain',
        }}
      />
      <Pressable
        onPress={()=>{
            pickImageAsync()
        }}
        className='absolute left-20 top-16 bg-blue-400 rounded-full p-1 border-2 border-white'>
        <Ionicons name="md-camera-reverse" size={30} color="white" />
      </Pressable>
    </View>
  )
}

export default FilledPicture