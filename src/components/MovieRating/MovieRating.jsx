import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieRating.module.css';

function MovieRating({ rating }) {
  return <span className={style.movieRating}>{rating.toFixed(1)}</span>;
}

MovieRating.propTypes = {
  rating: PropTypes.number,
};

MovieRating.defaultProps = {
  rating: 0,
};

export default MovieRating;
