import React from 'react';
import { Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
//components
import { Text } from '../../atoms';
//styles
import {
  Container,
  LeftContainer,
  ProgressContainer,
  RightContainer,
  DateContainer,
  DotContainer,
  AdultContainer,
  HomeCardStyles,
} from './HomeCard.styles';
import COLORS from '../../../theme/colors';

export const HomeCard = ({
  poster_path = '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  original_title = 'The Shawshank Redemption',
  title = 'The Shawshank Redemption',
  release_date = '1994-09-23',
  original_language = 'en',
  overview = 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
  adult = true,
  popularity = 66.186
}) => {
  return (
    <Container>
      <LeftContainer>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
          style={HomeCardStyles.cover}
          resizeMode="cover"
        />
        <ProgressContainer>
          <ProgressCircle
            percent={popularity}
            radius={30}
            borderWidth={8}
            color={COLORS.GREEN}
            shadowColor={COLORS.LIGHT_GRAY}
            bgColor={COLORS.DARK_GRAY}
          >
            <Text fontColor={COLORS.WHITE} fontSize="13px">{Math.round(popularity)}%</Text>
          </ProgressCircle>
        </ProgressContainer>
      </LeftContainer>
      <RightContainer>
        <Text fontSize="18px" fontColor={COLORS.BLACK} fontWeight={700}>
          #1 {original_title}
        </Text>
        <Text
          fontSize="18px"
          fontColor={COLORS.GRAY}
          fontWeight={600}
          fontStyle="italic">
          ({title})
        </Text>

        <DateContainer>
          <Text fontSize="16px" fontColor={COLORS.GRAY} fontWeight={400}>
            {release_date}
          </Text>
          <Text fontSize="16px" fontColor={COLORS.GRAY} fontWeight={400}>
            &nbsp;({original_language})
          </Text>

          <DotContainer />

          {adult && (
            <AdultContainer>
              <Text fontSize="16px" fontColor={COLORS.GRAY} fontWeight={400}>
                All
              </Text>
            </AdultContainer>
          )}
        </DateContainer>

        <Text fontSize="17px" fontColor={COLORS.GRAY} fontWeight={400} margin="4px">
          {overview.substring(0, 100)}...
        </Text>
      </RightContainer>
    </Container >
  );
};
