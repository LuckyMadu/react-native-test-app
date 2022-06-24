import React from 'react';
import { Image } from 'react-native';
//components
import { Text } from '../../atoms';
//styles
import {
  Container,
  LeftContainer,
  RightContainer,
  BannerStyles,
} from './HomeCard.styles';
import COLORS from '../../../theme/colors';

export const HomeCard = ({
  poster_path = "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  original_title = 'The Shawshank Redemption',
  title = 'The Shawshank Redemption',
  release_date = '1994-09-23',
  original_language = 'en',
  overview = 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
  adult = false,
}) => {
  return (
    <Container>
      <LeftContainer>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
          style={BannerStyles.cover}
          resizeMode="cover"
        />
      </LeftContainer>
      <RightContainer>
        <Text>Right</Text>
      </RightContainer>
    </Container>
  );
};
