import React from 'react';
import NotificationTabScreen from '../views/NotificationTab/notificationTab';

interface Props {
  navigation: any;
}

const NotificationTabViewModel = (props: Props) => {
  const {navigation} = props;
  return <NotificationTabScreen navigation={navigation} />;
};

export default NotificationTabViewModel;
