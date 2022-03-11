import React from 'react';
import SuccessScreen from '../views/Success/successSceen';

interface SuccessProps {
  navigation: any;
}

const SuccessViewModel = (props: SuccessProps) => {
  const {navigation} = props;
  return <SuccessScreen navigation={navigation} />;
};

export default SuccessViewModel;
