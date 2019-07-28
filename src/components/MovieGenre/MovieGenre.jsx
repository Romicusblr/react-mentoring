import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function MovieGenre({ genres }) {
  return <span className={style.movieGenre}>{genres.slice(0, 2).join(' & ')}</span>;
}

MovieGenre.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
};

MovieGenre.defaultProps = {
  genres: [],
};

export default MovieGenre;
