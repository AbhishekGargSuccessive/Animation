import React from 'react';
import DeliveryStatusScreen from '../views/DeliveryStatus/deliveryStatusScreen';

interface DeliveryModel {
  navigation: any;
}

const DeliveryStatusViewModel = (props: DeliveryModel) => {
  const {navigation} = props;
  return <DeliveryStatusScreen navigation={navigation} />;
};

export default DeliveryStatusViewModel;
