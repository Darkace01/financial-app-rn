import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Animated,
  FlatList,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Modal from './Components/Modal';
import { useNavigation } from '@react-navigation/native';
import { SPLASH5, SPLASH3 } from '../../constants/screenRoutes';
import * as storage from '../../Helpers/Service/StorageService';
import { INTRO_PAGE_VIEWED } from '../../constants/storageConstants';
import slides from '../../../slides';
import OnboardingItem from './OnboardingItem';

const Splash2 = () => {
  //New Splash screen
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    viewableItems[0] ? setCurrentIndex(viewableItems[0].index) : null;
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const startApp = async () => {
    storage.setItem(INTRO_PAGE_VIEWED, true);
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

export default Splash2;
