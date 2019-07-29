import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function MovieRating({ rating }) {
  return <h3 className={style.movieRating}>{rating.toFixed(1)}</h3>;
}

MovieRating.propTypes = {
  rating: PropTypes.number,
};

MovieRating.defaultProps = {
  rating: 0,
};

export default MovieRating;
