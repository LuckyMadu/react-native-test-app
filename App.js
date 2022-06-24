import React from 'react';
import { StatusBar} from 'react-native';
import {Home} from './src/screens'
// styles
import { Container } from './App.styles';

const App = () => {
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Home/>
    </Container>
  );
};



export default App;
