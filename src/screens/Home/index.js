import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
//components
import { Loader } from '../../components/atoms';
import { Header } from '../../components/molecules';
import { HomeCard } from '../../components/templates';
//actions
import { fetchAllMovies, clearAllMovies } from '../../redux/actions/movie';
//styles
import COLORS from '../../theme/colors';
import { Container } from './Home.styles';

export const Home = (props) => {
  // states
  const [movieListRefreshing, setMovieListRefreshing] = useState(false);
  // connect actions
  const dispatch = useDispatch();
  // connect redux store
  const isFetching = useSelector(state => state.movie.isFetching);
  const movieList = useSelector(state => state.movie.movieList);
  const movieListInfo = useSelector(state => state.movie.movieListInfo);

  useEffect(() => {
    //fetch top rated movies when mounting
    dispatch(fetchAllMovies({ page: 1 }));
  }, []);

  /**
   * @description Refreshing movie list
   */
  const refreshMovieList = () => {
    dispatch(clearAllMovies());
    setMovieListRefreshing(false);
    dispatch(fetchAllMovies({ page: 1 }));
  };

  const listFooterComponent = () => {
    return isFetching && <Loader color={COLORS.PRIMARY} size={24} />;
  };

  const handleLoadMore = () => {
    let passParams = {
      page: movieListInfo && movieListInfo.page + 1,
    };

    dispatch(fetchAllMovies(passParams));
  };

  return (
    <Container testID="component-home">
      {/* Loading Indicator */}
      {isFetching && <Loader />}
      {/* Top safearea header */}
      <Header />
      {/* Movie List */}
      <FlatList
        data={movieList}
        keyExtractor={(item, index) => {
          return item.id.toString();
        }}
        renderItem={({ item, index }) => {
          return <HomeCard item={item} index={index} key={item.id} />;
        }}
        refreshControl={
          <RefreshControl
            refreshing={movieListRefreshing}
            tintColor={COLORS.PRIMARY}
            onRefresh={() => refreshMovieList()}
          />
        }
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        ListFooterComponent={listFooterComponent}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
