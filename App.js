import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Home } from './src/screens';
import store from './src/redux/store';
// styles
import { TopSafeAreaView } from './App.styles';

const App = () => {
  return (
    <Provider store={store}>
      <TopSafeAreaView />
      <StatusBar barStyle="light-content" />
      <Home />
    </Provider>
  );
};

export default App;
