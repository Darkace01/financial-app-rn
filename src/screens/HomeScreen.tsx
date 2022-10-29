import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import { colors } from '../constants/globalStyles';
import Chart from '../components/Chart';
// get screenwidth
const screenWidth = Dimensions.get('window').width;
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.chartSection}>
        <Chart />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    backgroundColor: colors.pageBackground,
    height: '100%',
  },
  chartSection: {
    width: screenWidth / 1.1,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
