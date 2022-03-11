import React from 'react';
import NotificationScreen from '../views/Notification/notification';

interface Props {
  navigation: any;
}

const NotificationViewModel = (props: Props) => {
  const {navigation} = props;
  return <NotificationScreen navigation={navigation} />;
};

export default NotificationViewModel;
