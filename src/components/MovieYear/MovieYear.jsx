import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function MovieYear({ year }) {
  return <span className={style.movieYear}>{year}</span>;
}

MovieYear.propTypes = {
  year: PropTypes.number,
};

MovieYear.defaultProps = {
  year: 0,
};

export default MovieYear;
