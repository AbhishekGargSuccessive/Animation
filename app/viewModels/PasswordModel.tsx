import React from 'react';
import PasswordScreen from '../views/PasswordRecovery/passwordRecoveryScreen';

interface PasswordModel {
  navigation: any;
}

const PasswordModel = (props: PasswordModel) => {
  const {navigation} = props;
  return <PasswordScreen navigation={navigation} />;
};

export default PasswordModel;
