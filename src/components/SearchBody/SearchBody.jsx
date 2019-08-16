import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MovieCard from '../MovieCard';
import style from './SearchBody.module.css';

function SearchBody({
  movies, loading, className, ...other
}) {
  if (loading) {
    return '';
  }
  if (!movies) return <h2>No items found</h2>;

  return (
    <div
      className={classNames(style.searchBody, className)}
      {...other}
    >
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

SearchBody.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf),
  className: PropTypes.string,
};

SearchBody.defaultProps = {
  movies: null,
  className: '',
};
export default SearchBody;
