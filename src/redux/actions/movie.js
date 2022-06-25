import { showMessage } from 'react-native-flash-message';
import * as Types from '../actionTypes';
import { API_ROOT } from '../../config';
import Interceptor from '../../api/apiHelper';

/**
 * GET - All movies
 * @function fetchAllMovies
 * @param {Object} params - page number
*/
export const fetchAllMovies = (params) => async (dispatch) => {
    dispatch({ type: Types.FETCHING });
    Interceptor.get(null, { params })
        .then(async (response) => {
            dispatch({ type: Types.FETCHED });
            if (response?.status == 200) {
                console.log("response", response);
                dispatch({ type: Types.ALL_MOVIES, payload: response.data.results });
                if (response.data.page <= response.data.total_pages) {
                    dispatch({
                        type: Types.MOVIE_LIST_INFO,
                        payload: {
                            hasNextPage: true,
                            page: response.data.page,
                        },
                    });
                } else {
                    dispatch({
                        type: Types.MOVIE_LIST_INFO,
                        payload: {
                            hasNextPage: false,
                            page: response.data.page,
                        },
                    });
                }
            }
        })
        .catch((err) => {
            dispatch({ type: Types.FETCHED });
            console.log('fetch movies error', err);
        });
};

// clear list of movies
export const clearAllMovies = () => (dispatch) => {
    dispatch({ type: Types.CLEAR_ALL_MOVIES, payload: [] });
};