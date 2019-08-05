import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieYear.module.css';

function MovieYear({ year }) {
  return <span className={style.movieYear}>{year}</span>;
}

MovieYear.propTypes = {
  year: PropTypes.number.isRequired,
};

export default MovieYear;
