export default (state, action) => {
  if (state === undefined) {
    return {
      movies: null,
      currMovie: null,
      loading: true,
      error: null,
    };
  }
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return {
        ...state,
        movies: [],
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
        movies: [],
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
