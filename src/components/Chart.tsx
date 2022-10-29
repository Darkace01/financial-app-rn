import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { colors } from '../constants/globalStyles';
// get screen height
const screenHeight = Dimensions.get('window').height;

const Chart = () => {
  return (
    <View style={styles.container}>
      <Text>Chart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: screenHeight / 4,
    padding: 10,
    borderRadius: 10,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Chart;
