import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from '../Logo';
import style from './HeaderMovieDetails.module.css';
import MovieDetails from '../MovieDetails';

const HeaderMovieDetails = ({ movie, className, ...other }) => (
  <header
    className={classNames(style.headerMovieDetails, className)}
    {...other}
  >
    <Logo />
    <MovieDetails movie={movie} />
  </header>
);

HeaderMovieDetails.propTypes = {
  movie: PropTypes.objectOf(),
  className: PropTypes.string,
};

HeaderMovieDetails.defaultProps = {
  movie: {},
  className: '',
};

export default HeaderMovieDetails;
