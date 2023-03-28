import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import EmptyPicture from './Components/EmptyPicture';
import * as ImagePicker from 'expo-image-picker';
import FilledPicture from './Components/FilledPicture';
import { UserContext } from '../../contexts/user.context';
import { saveUserProfilePicture } from '../../Helpers/Service/UserService';
import CustomLoadingComponent from '../../components/CustomLoadingComponent';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import {
  apiResponse,
  ProfilePictureResponse,
} from '../../Helpers/Interfaces/apiResponse';

const Account = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const { user, updateUserProfilePicture } = useContext(UserContext);
  if (user === null) return null;
  const { firstName, lastName, profilePictureUrl, emailAddress, phoneNumber } =
    user;

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      var imageResult = result;
      setIsLoading(true);
      saveUserProfilePicture(imageResult)
        .then((res: apiResponse<ProfilePictureResponse>) => {
          updateUserProfilePicture(res.data);
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Your profile picture was successfully uploaded',
          });
          setIsLoading(false);
        })
        .catch((err) => {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'An error occured while uploading your profile picture',
          });
          setIsLoading(false);
        });
    } else {
      Alert.alert('Note', 'No image was selected');
    }
  };
  return (
    <SafeAreaView className='mt-10 mx-4 space-y-10'>
      <View className='w-[60%] flex flex-row justify-between items-center'>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          className='rounded-full bg-white p-3'
        >
          <Ionicons name='chevron-back' size={24} color='black' />
        </Pressable>
        <Text className='font-bold text-lg'>My Account</Text>
      </View>
      <View className='flex flex-row justify-center'>
        {selectedImage != null ? (
          <FilledPicture uri={selectedImage} pickImageAsync={pickImageAsync} />
        ) : (
          <EmptyPicture pickImageAsync={pickImageAsync} />
        )}
      </View>
      <View className='space-y-3'>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
          <Text className='text-gray-400'>Name</Text>
          <Text className='font-bold'>
            {firstName} {lastName}
          </Text>
        </View>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
          <Text className='text-gray-400'>Email</Text>
          <Text className='font-bold'>{emailAddress}</Text>
        </View>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
          <Text className='text-gray-400'>Phone Number</Text>
          <Text className='font-bold'>{phoneNumber}</Text>
        </View>
      </View>
      <View className='h-16 rounded-md justify-center items-center bg-gray-300'>
        <Text className='text-accent font-bold text-lg'>Save</Text>
      </View>
      {isLoading ? <CustomLoadingComponent visible={isLoading} /> : null}
    </SafeAreaView>
  );
};

export default Account;
