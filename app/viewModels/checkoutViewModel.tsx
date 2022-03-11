import React, {useState} from 'react';
import CheckoutScreen from '../views/Checkout/checkoutScreen';

interface CheckoutProps {
  navigation: any;
}

const CheckoutViewModel = (props: CheckoutProps) => {
  const {navigation} = props;
  const [select, setSelect] = useState(0);
  return (
    <CheckoutScreen
      navigation={navigation}
      select={select}
      setSelect={(value: number) => setSelect(value)}
    />
  );
};

export default CheckoutViewModel;
