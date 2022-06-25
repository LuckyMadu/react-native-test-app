import * as Types from '../actionTypes';

const initialState = {
    isFetching: false,
    movieList: [],
    movieListInfo: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case Types.FETCHED:
            return {
                ...state,
                isFetching: false,
            };
        case Types.ALL_MOVIES:
            return {
                ...state,
                movieList: [...state.movieList, ...action.payload],
            };
        case Types.MOVIE_LIST_INFO:
            return {
                ...state,
                movieListInfo: action.payload,
            };
        case Types.CLEAR_ALL_MOVIES:
            return {
                ...state,
                movieList: action.payload,
            };
        default:
            return state;
    }
};

export default movieReducer;
