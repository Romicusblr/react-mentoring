import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieTitle.module.css';

function MovieTitle({ title }) {
  return <p className={style.movieTitle}>{title}</p>;
}

MovieTitle.propTypes = {
  title: PropTypes.string,
};

MovieTitle.defaultProps = {
  title: '',
};

export default MovieTitle;
