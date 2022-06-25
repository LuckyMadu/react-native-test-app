import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
//components
import { Header } from '../../components/molecules';
import { HomeCard } from '../../components/templates';
//actions
import { fetchAllMovies } from '../../redux/actions/movie';
//styles
import COLORS from '../../theme/colors';
import { Container } from './Home.styles';


export const Home = () => {

  const dispatch = useDispatch();

  // connect redux store
  const isFetching = useSelector((state) => state.movie.isFetching);
  const movieList = useSelector((state) => state.movie.movieList);

  console.log("movieList", movieList);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [])

  return (
    <Container testID="component-home">
      <Header />

      <FlatList
        data={movieList}
        keyExtractor={(item, index) => { return item.id.toString() }}
        renderItem={({ item, index }) => {
          return <HomeCard item={item} index={index} key={item.id} />
        }}
        onEndReached={() => { }}
        refreshControl={
          <RefreshControl
            tintColor={COLORS.PRIMARY}
            onRefresh={() => { }}
          />
        }
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
};
