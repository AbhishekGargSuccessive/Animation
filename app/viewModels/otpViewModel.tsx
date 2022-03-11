import React from 'react';
import OTPScreen from '../views/otp/otpScreen';

interface OTPModelProps {
  navigation: any;
}

const OTPViewModel = (props: OTPModelProps) => {
  const {navigation} = props;
  return <OTPScreen navigation={navigation} />;
};

export default OTPViewModel;
