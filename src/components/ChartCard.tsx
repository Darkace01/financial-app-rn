import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { MonthlyBalance } from '../Helpers/Interfaces/apiResponse';
import Loading from './Loading';
import { colors } from '../constants/globalStyles';
import { getFirstTwoNumbers } from '../constants/commonHelpers';
interface Props {
  monthlyData: MonthlyBalance[];
  isLoading: boolean;
}
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const ChartCard = ({ monthlyData, isLoading }: Props) => {
  const chartData = {
    labels: monthlyData?.map((item) => item.month[0]),
    datasets: [
      {
        data: monthlyData?.map((item) => getFirstTwoNumbers(item.balance)),
      },
    ],
  };
  return (
    <View>
      {isLoading ? (
        <Loading />
      ) : (
        <LineChart
          data={{
            labels: chartData?.labels,
            datasets: chartData?.datasets,
          }}
          width={screenWidth / 1.2} // from react-native
          height={screenHeight / 4.4}
          yAxisLabel='₦'
          yAxisSuffix='k'
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: colors.primary,
            backgroundGradientFrom: colors.primary,
            backgroundGradientTo: colors.accent2,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '2',
              strokeWidth: '1',
              stroke: colors.accent,
            },
          }}
          bezier
          style={{
            marginVertical: 0,
            borderRadius: 8,
          }}
        />
      )}
    </View>
  );
};

export default ChartCard;
