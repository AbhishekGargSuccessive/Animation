import React from 'react';
import RiderReviewScreen from '../views/RiderReview/riderReviewScreen';

interface RiderProps {
  navigation: any;
}

const RiderReviewViewModel = (props: RiderProps) => {
  const {navigation} = props;
  return <RiderReviewScreen navigation={navigation} />;
};

export default RiderReviewViewModel;
