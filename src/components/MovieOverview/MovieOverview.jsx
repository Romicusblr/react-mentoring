import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function MovieOverview({ text }) {
  return <p className={style.movieOverview}>{text}</p>;
}

MovieOverview.propTypes = {
  text: PropTypes.string,
};

MovieOverview.defaultProps = {
  text: '',
};

export default MovieOverview;
