import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { AntDesign } from '@expo/vector-icons';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.leftSection}>
          <Text style={styles.welcomText}>Welcome Back.</Text>
          <Text style={styles.nameText}>A. Adedamola</Text>
          <View style={styles.bottomSection}>
            <View style={styles.addItem}>
              <AntDesign
                name='pluscircle'
                size={16}
                style={styles.addItemIcon}
              />
              <Text style={styles.addItemText}>Add Item</Text>
            </View>
          </View>
        </View>
        <View style={styles.rigthSection}>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={styles.profileImage}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: colors.accent,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSection: {
    marginVertical: 5,
  },
  addItem: {
    flexDirection: 'row',
    backgroundColor: colors.accent2,
    width: 90,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  addItemIcon: {
    marginRight: 5,
    color: colors.white,
  },
  addItemText: {
    fontFamily: fonts.primary,
    fontSize: 10,
    color: colors.white,
  },
  leftSection: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  welcomText: {
    fontSize: 10,
    fontWeight: '300',
    fontFamily: fonts.primary,
    color: colors.gray,
  },
  rigthSection: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: fonts.primary,
    color: colors.white,
  },
  notificationIcon: {
    marginRight: 5,
    color: colors.dark,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
export default TopBar;
