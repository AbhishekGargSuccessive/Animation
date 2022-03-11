import React, {useState} from 'react';
import DetailScreen from '../views/HomeDetails/homeDetailScreen';

interface DetailProps {
  navigation: any;
}

const HomeDetailViewModel = (props: DetailProps) => {
  const {navigation} = props;
  const [counter, setCounter] = useState(1);
  const [size, setSize] = useState(0);
  return (
    <DetailScreen
      navigation={navigation}
      size={size}
      setSize={setSize}
      counter={counter}
      setCounter={setCounter}
    />
  );
};

export default HomeDetailViewModel;
