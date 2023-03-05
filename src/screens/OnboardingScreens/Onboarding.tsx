import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Animated,
  FlatList,
} from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/screenRoutes';
import * as storage from '../../Helpers/Service/StorageService';
import { INTRO_PAGE_VIEWED } from '../../constants/storageConstants';
import slides from '../../../slides';
import OnboardingItem from './OnboardingItem';
import { AppContext } from '../../contexts/app.context';
import { setItem } from '../../Helpers/Service/StorageService';

const Onboarding = () => {
  //New Splash screen
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const { setViewOnboarding } = useContext(AppContext);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    viewableItems[0] ? setCurrentIndex(viewableItems[0].index) : null;
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      startApp();
    }
  };

  const startApp = async () => {
    setItem(INTRO_PAGE_VIEWED, true).then(() => {
      setViewOnboarding(true);
    });
    // navigation.navigate(LOGIN);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 flex justify-center items-center bg-accent'>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => (
            <OnboardingItem
              title={item.title}
              description={item.description}
              id={item.id}
              nextStep={scrollTo}
              skipStep={startApp}
              currentIndex={currentIndex}
              totalSlides={slides.length}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
