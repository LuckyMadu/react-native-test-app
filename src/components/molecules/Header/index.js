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
        fontSize="17px"
        fontColor={COLORS.TEXT_PRIMARY}
        fontWeight={600}
        align="center">
        HEADER 1{'\n'}
        <Text
          fontSize="12px"
          fontColor={COLORS.TEXT_PRIMARY}
          fontWeight={500}
          align="center">
            HEADER 2
        </Text>
      </Text>
    </Container>
  );
};
