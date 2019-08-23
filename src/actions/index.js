import api from '../api';

const moviesRequested = () => ({
  type: 'FETCH_MOVIES_REQUEST',
});

const moviesLoaded = movies => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload: movies,
});

const moviesError = error => ({
  type: 'FETCH_MOVIES_FAILURE',
  payload: error,
});

const movieRequested = () => ({
  type: 'FETCH_MOVIE_REQUEST',
});

const movieLoaded = movie => ({
  type: 'FETCH_MOVIE_SUCCESS',
  payload: movie,
});

const movieError = error => ({
  type: 'FETCH_MOVIE_FAILURE',
  payload: error,
});

const fetchMovies = params => (dispatch) => {
  dispatch(moviesRequested());
  api.getMovies(params)
    .then(data => dispatch(moviesLoaded(data)))
    .catch(err => dispatch(moviesError(err)));
};

const fetchMovie = id => (dispatch) => {
  dispatch(movieRequested());
  api.getMovie(id)
    .then(data => dispatch(movieLoaded(data)))
    .catch(err => dispatch(movieError(err)));
};

export {
  fetchMovies,
  fetchMovie,
};
