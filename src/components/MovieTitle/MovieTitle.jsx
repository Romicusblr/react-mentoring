import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function MovieTitle({ title }) {
  return <h4 className={style.movieTitle}>{title}</h4>;
}

MovieTitle.propTypes = {
  title: PropTypes.string,
};

MovieTitle.defaultProps = {
  title: '',
};

export default MovieTitle;
