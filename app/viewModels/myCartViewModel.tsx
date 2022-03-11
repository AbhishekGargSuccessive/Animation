import React from 'react';
import MyCartScreen from '../views/MyCart/myCartScreen';

interface CartProps {
  navigation: any;
}

const MyCartViewModel = (props: CartProps) => {
  const {navigation} = props;
  return <MyCartScreen navigation={navigation} />;
};

export default MyCartViewModel;
