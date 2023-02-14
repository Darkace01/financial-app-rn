import { View, Text, SafeAreaView, Pressable, Image, Alert } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import EmptyPicture from './Components/EmptyPicture';
import * as ImagePicker from 'expo-image-picker';
import FilledPicture from './Components/FilledPicture';

const Account = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(8);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      Alert.alert('Note', 'No image was selected');
    }
  };
  return (
    <SafeAreaView className='mt-10 mx-4 space-y-10'>
      <View className='w-[60%] flex flex-row justify-between items-center'>
        <Pressable 
        onPress={()=>{
            navigation.goBack()
        }}
        className='rounded-full bg-white p-3'>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text className='font-bold text-lg'>My Account</Text>
      </View>
      <View className='flex flex-row justify-center'>
        {
          selectedImage != null ?
          <FilledPicture uri={selectedImage} pickImageAsync={pickImageAsync}/>
          :
          <EmptyPicture pickImageAsync={pickImageAsync}/>
        }
        
      </View>
      <View className='space-y-3'>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
            <Text className='text-gray-400'>Name</Text>
            <Text className='font-bold'>Adekunle Adedamola</Text>
        </View>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
            <Text className='text-gray-400'>Email</Text>
            <Text className='font-bold'>ademolav56@gmail.com</Text>
        </View>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
            <Text className='text-gray-400'>Phone Number</Text>
            <Text className='font-bold'>+23408126431390</Text>
        </View>
      </View>
      <View className='bg-white h-16 rounded-md justify-center items-center bg-gray-300'>
        <Text className='text-accent font-bold text-lg'>Save</Text>
      </View>
    </SafeAreaView>
  )
}

export default Account