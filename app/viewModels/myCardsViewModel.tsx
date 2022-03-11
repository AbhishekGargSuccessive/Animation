import React, {useState} from 'react';
import MyCardScreen from '../views/MyCards/myCardScreen';

interface CardsModel {
  navigation: any;
}

const MyCardsViewModel = (props: CardsModel) => {
  const {navigation} = props;
  const [select, setSelect] = useState(1);
  return (
    <MyCardScreen
      navigation={navigation}
      select={select}
      setSelect={(value: number) => setSelect(value)}
    />
  );
};

export default MyCardsViewModel;
