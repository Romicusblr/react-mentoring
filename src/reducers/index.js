const INITIAL_STATE = {
  movies: {
    data: [],
    total: 0,
  },
  currMovie: null,
  loading: true,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return {
        ...state,
        movies: INITIAL_STATE,
        loading: true,
        error: null,
      };

    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        movies: INITIAL_STATE,
        loading: false,
        error: action.payload,
      };
    case 'FETCH_MOVIE_REQUEST':
      return {
        ...state,
        movie: null,
        loading: true,
        error: null,
      };

    case 'FETCH_MOVIE_SUCCESS':
      return {
        ...state,
        movie: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_MOVIE_FAILURE':
      return {
        ...state,
        movie: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
