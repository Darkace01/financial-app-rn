import { View, Text, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import BalanceCard from './BalanceCard';
import {
  ClientTransactionBalance,
  MonthlyBalance,
} from '../Helpers/Interfaces/apiResponse';
import ChartCard from './ChartCard';
interface Props {
  isLoading: boolean;
  clientBalance: ClientTransactionBalance;
  monthlyData: MonthlyBalance[];
}
const screenWidth = Dimensions.get('window').width;
const CardContainer = ({ isLoading, clientBalance, monthlyData }: Props) => {
  return (
    <ScrollView
      horizontal={true}
      snapToInterval={screenWidth / 1.13}
      showsHorizontalScrollIndicator={false}
    >
      <BalanceCard isLoading={isLoading} clientBalance={clientBalance} />
      {isLoading === false ? (
        <ChartCard isLoading={isLoading} monthlyData={monthlyData} />
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default CardContainer;
