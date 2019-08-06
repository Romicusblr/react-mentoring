/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import MovieYear from '../MovieYear';
import List from '../List';

import style from './MovieCard.module.css';

function MovieCard({
  movieData: {
    title, genres, release_date, poster_path,
  },
}) {
  return (
    <figure className={style.movieCard}>
      <img src={poster_path} alt={title} />
      <figcaption>
        <h3 className={style.title}>
          {title}
          <MovieYear year={new Date(release_date).getFullYear()} />
        </h3>
        <List items={genres} limit={2} delimeter=" &amp; " />
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
