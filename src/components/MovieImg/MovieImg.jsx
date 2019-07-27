import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function MovieImg({ src, alt }) {
  return <img className={style.movieImg} src={src} alt={alt} />;
}

MovieImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

MovieImg.defaultProps = {
  src: '',
  alt: '',
};

export default MovieImg;
