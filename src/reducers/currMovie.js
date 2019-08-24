const initialState = {
  data: null,
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_CURR_MOVIE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'FETCH_CURR_MOVIE_SUCCESS':
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case 'FETCH_CURR_MOVIE_FAILURE':
      return {
        ...state,
        data: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
