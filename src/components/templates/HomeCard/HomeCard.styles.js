
import styled from 'styled-components/native';
import COLORS from '../../../theme/colors';

export const Container = styled.View`
  flex: 1;
  margin: 24px;
  background-color: ${COLORS.WHITE}
  padding: 20px;
  border-radius: 16px;
  shadow-color: ${COLORS.SHADOW}
  shadow-offset: 1px 3px;
  shadow-opacity: 10;
  shadow-radius: 10px;
  elevation: 10;
`;
