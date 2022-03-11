import React from 'react';
import DeliveryStatusScreen from '../views/DeliveryStatus/deliveryStatusScreen';

interface DeliveryModel {
  navigation: any;
}

const DeliveryStatusModel = (props: DeliveryModel) => {
  const {navigation} = props;
  return <DeliveryStatusScreen navigation={navigation} />;
};

export default DeliveryStatusModel;
