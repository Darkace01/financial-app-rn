import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import EmptyPicture from './Components/EmptyPicture';
import * as ImagePicker from 'expo-image-picker';
import FilledPicture from './Components/FilledPicture';
import { UserContext } from '../../contexts/user.context';
import {
  saveUserProfilePicture,
  updateUserDetails,
} from '../../Helpers/Service/UserService';
import CustomLoadingComponent from '../../components/CustomLoadingComponent';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import {
  apiResponse,
  BasicUser,
  ProfilePictureResponse,
} from '../../Helpers/Interfaces/apiResponse';

const Account = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [email, setEmail] = useState('');
  const [editProfile, setEditProfile] = useState(false);
  const { user, updateUserProfilePicture } = useContext(UserContext);
  useEffect(() => {
    if (user === null) return null;
    if (user) {
      setFirstNameInput(user.firstName);
      setLastNameInput(user.lastName);
      setPhoneNumberInput(user.phoneNumber);
      setEmail(user.emailAddress);
    }
  }, [user]);
  // const { firstName, lastName, emailAddress, phoneNumber } = user;

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

  const handleEditProfile = () => {
    if (!editProfile) {
      setEditProfile(true);
    }
    if (editProfile) {
      // update user details

      if (
        firstNameInput === '' ||
        lastNameInput === '' ||
        phoneNumberInput === ''
      ) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Please fill in all fields',
        });
      }

      var data = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        phoneNumber: phoneNumberInput,
      } as BasicUser;
      // update user details
      setIsLoading(true);
      updateUserDetails(data)
        .then((res: apiResponse<string>) => {
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Your profile was successfully updated',
          });
          setIsLoading(false);
          setEditProfile(false);
        })
        .catch((err) => {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'An error occured while updating your profile',
          });
          setIsLoading(false);
        });
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
        <View className='flex-row justify-between items-center'>
          <View className='bg-white h-20 rounded-md justify-center pl-4 w-[48%]'>
            <Text className='text-gray-400'>First Name</Text>
            <TextInput
              className='font-bold w-full'
              value={firstNameInput}
              editable={editProfile}
              onChangeText={(text) => setFirstNameInput(text)}
            />
          </View>
          <View className='bg-white h-20 rounded-md justify-center pl-4 w-[48%]'>
            <Text className='text-gray-400'>Last Name</Text>
            <TextInput
              className='font-bold w-full'
              value={lastNameInput}
              editable={editProfile}
              onChangeText={(text) => setLastNameInput(text)}
            />
          </View>
        </View>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
          <Text className='text-gray-400'>Email</Text>
          <Text className='font-bold'>{email}</Text>
        </View>
        <View className='bg-white h-20 rounded-md justify-center pl-4'>
          <Text className='text-gray-400'>Phone Number</Text>
          <TextInput
            className='font-bold w-full'
            value={phoneNumberInput}
            keyboardType='phone-pad'
            editable={editProfile}
            onChangeText={(text) => setPhoneNumberInput(text)}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleEditProfile}>
        <View
          className={`h-16 rounded-md justify-center items-center ${
            editProfile ? 'bg-accent' : 'bg-gray-300'
          }`}
        >
          <Text
            className={`${
              editProfile ? 'text-gray-300' : 'text-accent'
            } font-bold text-lg`}
          >
            {editProfile ? 'Update Details' : 'Edit Profile'}
          </Text>
        </View>
      </TouchableOpacity>
      {isLoading ? <CustomLoadingComponent visible={isLoading} /> : null}
    </SafeAreaView>
  );
};

export default Account;
