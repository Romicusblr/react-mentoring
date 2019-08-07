import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MovieCard from '../MovieCard';
import style from './SearchBody.module.css';

const SearchBody = ({ movies, className, ...other }) => (
  <div
    className={classNames(style.searchBody, className)}
    {...other}
  >
    {movies.map(movie => <MovieCard key={movie.id} movieData={movie} />)}
  </div>
);

SearchBody.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf),
  className: PropTypes.string,
};

SearchBody.defaultProps = {
  movies: [],
  className: '',
};
export default SearchBody;
