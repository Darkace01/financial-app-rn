import { View, Text, Pressable, Image } from 'react-native';
import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../../../contexts/user.context';

const FilledPicture = ({ uri, pickImageAsync }) => {
  const { user } = useContext(UserContext);
  if (user === null) return null;
  const { profilePictureUrl } = user;
  return (
    <View>
      <Image
        source={
          profilePictureUrl
            ? { uri: profilePictureUrl }
            : require('../../../../assets/images/profile.jpg')
        }
        className='rounded-full w-28 h-28'
        style={{
          resizeMode: 'contain',
        }}
      />
      <Pressable
        onPress={() => {
          pickImageAsync();
        }}
        className='absolute left-20 top-16 bg-accent rounded-full p-1 border-2 border-white'
      >
        <Ionicons name='md-camera-reverse' size={30} color='white' />
      </Pressable>
    </View>
  );
};

export default FilledPicture;
