import React from 'react';
//components
import {Header} from '../../components/molecules';
import {HomeCard} from '../../components/templates';
//styles
import {Container} from './Home.styles';

export const Home = () => {
  return ( 
      <Container testID="component-home">
        <Header />
        <HomeCard />
      </Container>
  );
};
