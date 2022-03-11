import React from 'react';
import MainStack from './app/routes/stackNavigator';
import {Provider} from 'react-redux';
import store from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};
export default App;
