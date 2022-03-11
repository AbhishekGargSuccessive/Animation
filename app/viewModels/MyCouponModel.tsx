import React, {useState} from 'react';
import MyCouponScreen from '../views/MyCoupon/myCouponScreen';

interface CouponModel {
  navigation: any;
}

const MyCouponModel = (props: CouponModel) => {
  const {navigation} = props;
  const [select, setSelect] = useState(true);
  return (
    <MyCouponScreen
      navigation={navigation}
      select={select}
      setSelect={setSelect}
    />
  );
};

export default MyCouponModel;
