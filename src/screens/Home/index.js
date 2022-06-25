import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
//components
import { Loader } from '../../components/atoms';
import { Header } from '../../components/molecules';
import { HomeCard } from '../../components/templates';
//actions
import { fetchAllMovies, clearAllMovies } from '../../redux/actions/movie';
import StorageHelper from '../../utils/StorageHelper'
import makeToast from '../../utils/toaster'
//styles
import COLORS from '../../theme/colors';
import { Container } from './Home.styles';

export const Home = () => {
  // states
  const [movieListRefreshing, setMovieListRefreshing] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isOffline, setOfflineStatus] = useState(false);
  // connect actions
  const dispatch = useDispatch();
  // connect redux store
  const isFetching = useSelector(state => state.movie.isFetching);
  const movieList = useSelector(state => state.movie.movieList);
  const movieListInfo = useSelector(state => state.movie.movieListInfo);

  useEffect(() => {
    /**
      * @description Network listener
    */
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = !state.isConnected;
      setOfflineStatus(offline);
      if (offline) {
        makeToast('danger', `Sorry, you are offline! \nWe have fetched latest movies till you come back!`)
      }
    });

    fetchMovieData();

    return () => removeNetInfoSubscription();
  }, []);

  const fetchMovieData = async () => {
    //fetch top rated movies when mounting
    await dispatch(fetchAllMovies({ page: 1 }));
    fetchSavedMovies();
  }

  const fetchSavedMovies = async () => {
    let savedMovieList = await StorageHelper.getMovieData();
    let convertedSavedMovieList = await JSON.parse(savedMovieList);
    setSavedMovies(convertedSavedMovieList);
  }

  /**
   * @description Refreshing movie list
   */
  const refreshMovieList = () => {
    if (isOffline) {
      makeToast('danger', 'Sorry, you are offline!')
    }
    dispatch(clearAllMovies());
    setMovieListRefreshing(false);
    dispatch(fetchAllMovies({ page: 1 }));
  };

  const listFooterComponent = () => {
    return isFetching && <Loader color={COLORS.PRIMARY} />;
  };

  const handleLoadMore = async () => {
    if (isOffline) {
      makeToast('danger', 'Sorry, you are offline!')
    }
    let passParams = {
      page: movieListInfo && movieListInfo.page + 1,
    };

    await dispatch(fetchAllMovies(passParams));
    fetchSavedMovies();
  };

  return (
    <Container testID="component-home">
      {/* Top safearea header */}
      <Header />
      {/* Movie List */}
      <FlatList
        data={isOffline ? savedMovies : movieList}
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
