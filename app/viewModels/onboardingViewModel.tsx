import React, {useRef} from 'react';
import OnboardingScreen from '../views/Onboarding/onboardingScreen';

interface Modelprops {
  navigation: any;
}

const OnboardingViewModel = (props: Modelprops) => {
  const {navigation} = props;
  const flatRef = useRef<any | null>(null);
  const scrollTo = (data: any) => {
    flatRef.current.scrollToIndex({animated: true, index: data});
  };
  return (
    <OnboardingScreen
      navigation={navigation}
      flatRef={flatRef}
      scrollTo={scrollTo}
    />
  );
};

export default OnboardingViewModel;
