import React from 'react';
//components
import {Text} from '../../atoms';
//styles
import {Container} from './Header.styles';
import COLORS from '../../../theme/colors';

export const Header = () => {
  return (
    <Container>
      <Text
        fontSize="20px"
        fontColor={COLORS.WHITE}
        fontWeight={600}
        align="center">
        Top Rated Movies
      </Text>
    </Container>
  );
};
