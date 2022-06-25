import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { Home } from './src/screens';
import store from './src/redux/store';
// styles
import { TopSafeAreaView } from './App.styles';

const App = () => {
  return (
    <Provider store={store}>
      <TopSafeAreaView />
      <StatusBar barStyle="light-content" />
      <FlashMessage position="top" />
      <Home />
    </Provider>
  );
};

export default App;
