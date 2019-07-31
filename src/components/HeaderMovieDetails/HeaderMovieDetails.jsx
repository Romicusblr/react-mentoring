import React from 'react';
import Logo from '../Logo';
import style from './style.module.css';
import MovieDetails from '../MovieDetails';
import { data } from '../fakeMovies';

const HeaderMovieDetails = () => (
  <header className={style.headerMovieDetails}>
    <Logo />
    <MovieDetails movie={data[0]} />
  </header>
);

export default HeaderMovieDetails;
