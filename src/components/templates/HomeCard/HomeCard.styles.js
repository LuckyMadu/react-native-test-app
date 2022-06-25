import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../../theme/colors';

//set poster banner height
const IMAGE_HEIGHT = 260;

export const Container = styled.View`
  flex-direction: row;
  margin: 16px;
  background-color: ${COLORS.WHITE}
  padding: 20px;
  padding-bottom: 30px;
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

export const ProgressContainer = styled.View`
  position: absolute;
  left: 30%;
  top: 85%;
`;

export const RightContainer = styled.View`
  flex: 1;
  padding-left: 10px;
  padding-top: 10px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DotContainer = styled.View`
  height: 4px;
  width: 4px;
  background-color: ${COLORS.GRAY}
  border-radius: 8px;
  margin-horizontal: 6px;
`;

export const AdultContainer = styled.View`
  flex-direction: row;
  border: 1px solid black;
  padding-horizontal: 4px;
  border-radius: 4px;
`;

export const HomeCardStyles = StyleSheet.create({
  cover: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
    height: IMAGE_HEIGHT
  },
  progressCircle: {
    color: COLORS.WHITE,
    fontSize: 18,
    backgroundColor: COLORS.WHITE
  }

})