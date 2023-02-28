import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationTopBar from '../components/NavigationTopBar';
import ToolipButton from '../components/ToolipButton';
import TransactionList from '../components/TransactionList';
import { AppContext } from '../contexts/app.context';
import {
  getPrevious30DaysDate,
  getPrevious365DaysDate,
  getPrevious6MonthsDate,
  getPrevious7DaysDate,
} from '../constants/commonHelpers';

const TransactionScreen = () => {
  const { handleFilterRange } = useContext(AppContext);
  const [activeFilter, setActiveFilter] = React.useState('Week');
  const filterList = ['Week', 'Month', '6 Months', 'Year'];
  const handleFilterPress = (filter: string) => {
    switch (filter) {
      case 'Week':
        setActiveFilter(filter);
        handleFilterRange(getPrevious7DaysDate(), new Date());
        break;
      case 'Month':
        setActiveFilter(filter);
        handleFilterRange(getPrevious30DaysDate(), new Date());
        break;
      case '6 Months':
        setActiveFilter(filter);
        handleFilterRange(getPrevious6MonthsDate(), new Date());
        break;
      case 'Year':
        setActiveFilter(filter);
        handleFilterRange(getPrevious365DaysDate(), new Date());
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView className={`bg-themeGrey h-full mx-auto px-5 w-full`}>
      <NavigationTopBar withFilter />
      <View className='flex flex-row justify-between my-4'>
        {filterList.map((filter) => (
          <ToolipButton
            key={filter}
            text={filter}
            active={activeFilter === filter}
            onclick={() => handleFilterPress(filter)}
          />
        ))}
      </View>
      <View>
        <TransactionList />
      </View>
    </SafeAreaView>
  );
};

export default TransactionScreen;
