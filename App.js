import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/screens';
// styles
import {TopSafeAreaView} from './App.styles';

const App = () => {
  return (
    <>
      <TopSafeAreaView/>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
};

export default App;
