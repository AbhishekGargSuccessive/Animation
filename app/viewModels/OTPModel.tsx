import React from 'react';
import OTPScreen from '../views/otp/otpScreen';

interface OTPModel {
  navigation: any;
}

const OTPModel = (props: OTPModel) => {
  const {navigation} = props;
  return <OTPScreen navigation={navigation} />;
};

export default OTPModel;
