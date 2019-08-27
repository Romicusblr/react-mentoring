import { combineReducers } from 'redux';
import currMovieReducer from './currMovie';
import moviesReducer from './movies';

export default combineReducers({
  currMovie: currMovieReducer,
  movies: moviesReducer,
});
