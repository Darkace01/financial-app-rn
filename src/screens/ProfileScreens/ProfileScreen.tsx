import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  Linking,
} from 'react-native';
import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ACCOUNT_SCREEN, SETTINGS_SCREEN } from '../../constants/screenRoutes';
import { UserContext } from '../../contexts/user.context';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  if (user === null) return null;
  const { firstName, lastName, profilePictureUrl, emailAddress } = user;

  const handleContactMail = () => {
    Linking.openURL(`mailto:incomeapp@gmail.com`);
  };

  const commingSoon = () => {
    Toast.show({
      type: 'info',
      position: 'bottom',
      text1: 'Comming Soon',
      text2: 'This feature is not available yet',
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };
  return (
    <SafeAreaView className=' bg-accent h-full w-full'>
      <View className='flex flex-row items-center space-x-3 mx-4 h-1/6 mt-5'>
        <View>
          <Image
            source={
              profilePictureUrl
                ? { uri: profilePictureUrl }
                : require('../../../assets/images/profile.jpg')
            }
            className='rounded-full w-12 h-12'
            style={{
              resizeMode: 'contain',
            }}
          />
        </View>
        <View>
          <Text className='text-white font-bold'>
            {firstName} {lastName}
          </Text>
          <Text className='text-white'>{emailAddress}</Text>
        </View>
      </View>
      <View className='h-5/6 bg-white rounded-t-3xl pt-5 px-5 space-y-5'>
        <Pressable
          onPress={() => {
            navigation.navigate(ACCOUNT_SCREEN);
          }}
          className='flex flex-row items-center space-x-4'
        >
          <View className='p-3 bg-gray-300 rounded-xl'>
            <Ionicons name='person' size={20} color='#5b24cf' />
          </View>
          <View>
            <Text className='font-semibold'>My Account</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate(SETTINGS_SCREEN);
          }}
          className='flex flex-row items-center space-x-4'
        >
          <View className='p-3 bg-gray-300 rounded-xl'>
            <Ionicons name='settings' size={20} color='#5b24cf' />
          </View>
          <View>
            <Text className='font-semibold'>Settings</Text>
          </View>
        </Pressable>
        <Pressable
          className='flex flex-row items-center space-x-4'
          onPress={commingSoon}
        >
          <View className='p-3 bg-gray-300 rounded-xl'>
            <AntDesign name='questioncircle' size={20} color='#5b24cf' />
          </View>
          <View>
            <Text className='font-semibold'>Help Center</Text>
          </View>
        </Pressable>
        <Pressable
          className='flex flex-row items-center space-x-4'
          onPress={handleContactMail}
        >
          <View className='p-3 bg-gray-300 rounded-xl'>
            <Ionicons name='mail' size={20} color='#5b24cf' />
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
