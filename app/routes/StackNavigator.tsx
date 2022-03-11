import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainDrawer from './drawerNavigator';
import {
  OnboardingViewModel,
  SignInViewModel,
  SignUpViewModel,
  OTPViewModel,
  PasswordViewModel,
  DetailViewModel,
  MyCartViewModel,
  MyCardsViewModel,
  AddNewCardViewModel,
  CheckoutViewModel,
  SuccessViewModel,
  DeliveryStatusViewModel,
  MyCouponViewModel,
  NotificationViewModel,
  SettingsViewModel,
  ChangePasswordViewModel,
  MyOrdersViewModel,
  RiderReviewViewModel,
  MyAccountViewModel,
  EditAccountViewModel,
} from '../viewModels';

type Abc = {
  Onboarding: Function;
  SignIn: Function;
  SignUp: Function;
  OTP: Function;
  Password: Function;
  Home: Function;
  Detail: Function;
  MyCart: Function;
  MyCards: Function;
  AddNewCard: Function;
  Checkout: Function;
  Success: Function;
  Drawer: Function;
  Delivery: Function;
  Coupon: Function;
  Notification: Function;
  Settings: Function;
  ChangePassword: Function;
  MyOrders: Function;
  RiderReview: Function;
  MyAccount: Function;
  EditAccount: Function;
};

const Stack = createNativeStackNavigator<Abc>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingViewModel} />
        <Stack.Screen name="SignIn" component={SignInViewModel} />
        <Stack.Screen name="SignUp" component={SignUpViewModel} />
        <Stack.Screen name="OTP" component={OTPViewModel} />
        <Stack.Screen name="Password" component={PasswordViewModel} />
        <Stack.Screen name="Detail" component={DetailViewModel} />
        <Stack.Screen name="MyCart" component={MyCartViewModel} />
        <Stack.Screen name="MyCards" component={MyCardsViewModel} />
        <Stack.Screen name="AddNewCard" component={AddNewCardViewModel} />
        <Stack.Screen name="Checkout" component={CheckoutViewModel} />
        <Stack.Screen name="Success" component={SuccessViewModel} />
        <Stack.Screen name="Drawer" component={MainDrawer} />
        <Stack.Screen name="Delivery" component={DeliveryStatusViewModel} />
        <Stack.Screen name="Coupon" component={MyCouponViewModel} />
        <Stack.Screen name="Notification" component={NotificationViewModel} />
        <Stack.Screen name="Settings" component={SettingsViewModel} />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordViewModel}
        />
        <Stack.Screen name="MyOrders" component={MyOrdersViewModel} />
        <Stack.Screen name="RiderReview" component={RiderReviewViewModel} />
        <Stack.Screen name="MyAccount" component={MyAccountViewModel} />
        <Stack.Screen name="EditAccount" component={EditAccountViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
