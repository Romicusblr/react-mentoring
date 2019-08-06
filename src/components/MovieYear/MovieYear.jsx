import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './MovieYear.module.css';

function MovieYear({ year, className, ...other }) {
  return (
    <span
      className={classNames(style.movieYear, className)}
      {...other}
    >
      {year}
    </span>
  );
}

MovieYear.propTypes = {
  year: PropTypes.number.isRequired,
  className: PropTypes.string,
};

MovieYear.defaultProps = {
  className: '',
};

export default MovieYear;
