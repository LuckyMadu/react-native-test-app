import React from 'react';
//components
import {Button} from '../../atoms';
//styles
import {Container} from './HomeCard.styles';
import COLORS from '../../../theme/colors';

export const HomeCard = () => {
  return (
    <Container>
      <Button
        height="50px"
        width="100%"
        bgColor={COLORS.PRIMARY}
        onPress={() => {}}>
        Home
      </Button>
    </Container>
  );
};
