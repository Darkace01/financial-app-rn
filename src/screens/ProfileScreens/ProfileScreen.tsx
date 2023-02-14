import { View, Text, SafeAreaView, Image, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ACCOUNT, SETTINGS } from '../../constants/screenRoutes';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 bg-accent'>
      <View className='flex flex-row items-center space-x-3 mx-4 h-[20%]'>
        <View>
          <Image
            source={require("../../../assets/images/damola.png")}
            className='rounded-full'
            style={{
              width: 65,
              height: 67,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View>
          <Text className='text-white font-bold'>Adekunle Adedamola</Text>
          <Text className='text-white'>adedamolav56@gmail.com</Text>
        </View>
      </View>
      <View className='h-[80%] bg-white rounded-t-3xl pt-5 px-5 space-y-5'>
            <Pressable 
            onPress={()=>{
              navigation.navigate(ACCOUNT)
            }}
            className='flex flex-row items-center space-x-4'>
              <View className='p-4 bg-gray-300 rounded-xl'>
                <Ionicons name="person" size={24} color="#5b24cf" />
              </View>
              <View>
                <Text className='font-semibold'>My Account</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={()=>{
                navigation.navigate(SETTINGS)
              }}
              className='flex flex-row items-center space-x-4'>
              <View className='p-4 bg-gray-300 rounded-xl'>
                <Ionicons name="settings" size={24} color="#5b24cf" />
              </View>
              <View>
                <Text className='font-semibold'>Settings</Text>
              </View>
            </Pressable>
            <Pressable 
            
            className='flex flex-row items-center space-x-4'>
              <View className='p-4 bg-gray-300 rounded-xl'>
                <AntDesign name="questioncircle" size={24} color="#5b24cf" />
              </View>
              <View>
                <Text className='font-semibold'>Help Center</Text>
              </View>
            </Pressable>
            <Pressable className='flex flex-row items-center space-x-4'>
              <View className='p-4 bg-gray-300 rounded-xl'>
                <Ionicons name="call-sharp" size={24} color="#5b24cf" />
              </View>
              <View>
                <Text className='font-semibold'>Contact</Text>
              </View>
            </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
