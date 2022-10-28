import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, fonts } from '../constants/globalStyles';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.welcomText}>Welcome Back.</Text>
        <Text style={styles.nameText}>A. Adedamola</Text>
      </View>
      <View style={styles.rigthSection}>
        <MaterialCommunityIcons
          name='bell'
          size={20}
          style={styles.notificationIcon}
        />
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  welcomText: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: fonts.primary,
    color: colors.gray,
  },
  rigthSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.primary,
    color: colors.dark,
  },
  notificationIcon: {
    marginRight: 5,
    color: colors.dark,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});
export default TopBar;
