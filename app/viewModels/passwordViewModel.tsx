import React from 'react';
import PasswordRecoveryScreen from '../views/PasswordRecovery/passwordRecoveryScreen';

interface PasswordModelProps {
  navigation: any;
}

const PasswordRecoveryViewModel = (props: PasswordModelProps) => {
  const {navigation} = props;
  return <PasswordRecoveryScreen navigation={navigation} />;
};

export default PasswordRecoveryViewModel;
