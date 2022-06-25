import AsyncStorage from "@react-native-async-storage/async-storage";

const setMovieData = async (movies) => {
  await AsyncStorage.setItem('movies', movies);
};
const getMovieData = () => {
  return AsyncStorage.getItem('movies');
};
const clearMovies = () => {
  AsyncStorage.removeItem('movies');
};

export default {
  setMovieData,
  getMovieData,
  clearMovies,
};
