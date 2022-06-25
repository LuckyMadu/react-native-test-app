import * as Types from '../actionTypes';
import Interceptor from '../../api/apiHelper';
import makeToast from '../../utils/toaster'

/**
 * GET - All movies
 * @function fetchAllMovies
 * @param {Object} params - page number
*/
export const fetchAllMovies = (params) => async (dispatch) => {
    //start fetching
    dispatch({ type: Types.FETCHING });
    Interceptor.get(null, { params })
        .then(async (response) => {
            //stop fetching
            dispatch({ type: Types.FETCHED });
            //check response status
            if (response?.status == 200) {
                console.log("response", response);
                //dispatch movie list to the reducer
                dispatch({ type: Types.ALL_MOVIES, payload: response.data.results });
                //check infinite scrolling with page numbers
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
            } else if (response?.status == 401) {
                console.log('fetch movies error', err);
            } else {
                console.log('fetch movies error', err);
            }
        })
        .catch((err) => {
            //stop fetching
            dispatch({ type: Types.FETCHED });
            console.log('fetch movies error', err);
        });
};

// clear list of movies
export const clearAllMovies = () => (dispatch) => {
    dispatch({ type: Types.CLEAR_ALL_MOVIES, payload: [] });
};