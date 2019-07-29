import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function MovieYearDuration({ year, duration }) {
  return (
    <p className={style.movieYearDuration}>
      {year}
      &ensp;
      {duration}
      min
    </p>
  );
}

MovieYearDuration.propTypes = {
  year: PropTypes.number,
  duration: PropTypes.number,
};

MovieYearDuration.defaultProps = {
  year: 0,
  duration: 0,
};

export default MovieYearDuration;
