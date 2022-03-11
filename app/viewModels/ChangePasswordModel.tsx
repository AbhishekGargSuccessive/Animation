import React from 'react';
import ChangePasswordScreen from '../views/ChangePassword/changePasswordScreen';

interface Props {
  navigation: any;
}

const ChangePasswordModel = (props: Props) => {
  const {navigation} = props;
  return <ChangePasswordScreen navigation={navigation} />;
};

export default ChangePasswordModel;
