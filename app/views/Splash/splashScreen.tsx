import React, {useEffect} from 'react';
import {Image, SafeAreaView} from 'react-native';
import styles from './styles';

const SplashScreen = (props: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate('Onboarding');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/splash/android/drawable-mdpi/01.png')}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
