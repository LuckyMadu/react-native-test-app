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

export const HomeCard = ({ item, index }) => {
  return (
    <Container>
      <LeftContainer>
        <Image
          source={{
            uri: item?.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
          }}
          style={HomeCardStyles.cover}
          resizeMode="cover"
        />
        <ProgressContainer>
          <ProgressCircle
            percent={item?.popularity ? item.popularity : 0}
            radius={30}
            borderWidth={8}
            color={COLORS.GREEN}
            shadowColor={COLORS.LIGHT_GRAY}
            bgColor={COLORS.DARK_GRAY}
          >
            <Text fontColor={COLORS.WHITE} fontSize="13px">{Math.round(item?.popularity ? item.popularity : 0)}%</Text>
          </ProgressCircle>
        </ProgressContainer>
      </LeftContainer>
      <RightContainer>
        <Text fontSize="18px" fontColor={COLORS.BLACK} fontWeight={700}>
          #{index + 1} {item?.original_title ? item.original_title : null}
        </Text>
        <Text
          fontSize="18px"
          fontColor={COLORS.GRAY}
          fontWeight={600}
          fontStyle="italic">
          ({item.title})
        </Text>

        <DateContainer>
          <Text fontSize="16px" fontColor={COLORS.GRAY} fontWeight={400}>
            {item?.release_date ? item.release_date : null}
          </Text>
          <Text fontSize="16px" fontColor={COLORS.GRAY} fontWeight={400}>
            &nbsp;({item?.original_language ? item.original_language : null})
          </Text>

          <DotContainer />

          {!item?.adult && item.adult && (
            <AdultContainer>
              <Text fontSize="16px" fontColor={COLORS.GRAY} fontWeight={400}>
                All
              </Text>
            </AdultContainer>
          )}
        </DateContainer>

        <Text fontSize="17px" fontColor={COLORS.GRAY} fontWeight={400} margin="4px">
          {item?.overview ? item.overview.substring(0, 100) : null}...
        </Text>
      </RightContainer>
    </Container >
  );
};
