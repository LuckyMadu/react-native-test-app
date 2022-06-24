import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../../theme/colors';

const IMAGE_HEIGHT = 250;

export const Container = styled.View`
  flex-direction: row;
  margin: 16px;
  background-color: ${COLORS.WHITE}
  padding: 20px;
  border-radius: 16px;
  shadow-color: ${COLORS.SHADOW}
  shadow-offset: 1px 3px;
  shadow-opacity: 10;
  shadow-radius: 10px;
  elevation: 10;
`;

export const LeftContainer = styled.View`
  flex: 1;
`;

export const RightContainer = styled.View`
  flex: 1;
`;

export const BannerStyles = StyleSheet.create({
  cover: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
    height: IMAGE_HEIGHT
  }
})