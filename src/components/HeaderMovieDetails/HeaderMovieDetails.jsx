import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import style from './HeaderMovieDetails.module.css';
import MovieDetails from '../MovieDetails';

const HeaderMovieDetails = ({ movie }) => (
  <header className={style.headerMovieDetails}>
    <Logo />
    <MovieDetails movie={movie} />
  </header>
);

HeaderMovieDetails.propTypes = {
  movie: PropTypes.objectOf(),
};

HeaderMovieDetails.defaultProps = {
  movie: {},
};

export default HeaderMovieDetails;
