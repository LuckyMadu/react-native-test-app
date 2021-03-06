import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';
//styles
import {Container} from './Loader.styles';
import COLORS from '../../../theme/colors';

export const Loader = ({size, color}) => {
  return (
    <Container>
      <ActivityIndicator size={size} color={color} />
    </Container>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: 'large',
  color: COLORS.PRIMARY,
};
