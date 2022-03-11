import React from 'react';
import EditAccountScreen from '../views/EditAccount/editAccountScreen';

interface EditProps {
  navigation: any;
}

const EditAccountModel = (props: EditProps) => {
  const {navigation} = props;
  return <EditAccountScreen navigation={navigation} />;
};

export default EditAccountModel;
