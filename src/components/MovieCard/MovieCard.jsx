/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import MovieImg from '../MovieImg';
import MovieTitle from '../MovieTitle';
import MovieGenre from '../MovieGenre';
import MovieYear from '../MovieYear';

import style from './MovieCard.module.css';

function MovieCard({
  movieData: {
    title, genres, release_date, poster_path,
  },
}) {
  return (
    <figure className={style.movieCard}>
      <MovieImg src={poster_path} alt={title} />
      <figcaption>
        <div>
          <MovieTitle title={title} />
          <MovieYear year={new Date(release_date).getFullYear()} />
        </div>
        <MovieGenre genres={genres} />
      </figcaption>
    </figure>
  );
}

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movieData: {},
};

export default MovieCard;
