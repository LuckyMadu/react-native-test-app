import React from 'react';
//components
import {Text} from '../../atoms';
//styles
import {Container} from './Back.styles';
import COLORS from '../../../theme/colors';

export const Back = () => {
  return (
    <Container onPress={() => navigation.goBack()}>
      <Text
        fontSize="17px"
        fontColor={COLORS.PRIMARY}
        fontWeight={600}
        align="left">
        BACK
      </Text>
    </Container>
  );
};
