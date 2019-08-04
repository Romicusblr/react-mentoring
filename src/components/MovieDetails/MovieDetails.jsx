/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import MovieImg from '../MovieImg';
import MovieTitle from '../MovieTitle';
import LabelRaised from '../LabelRaised';
import MovieOverview from '../MovieOverview';
import MovieRating from '../MovieRating';
import MovieGenre from '../MovieGenre';

import style from './MovieDetails.module.css';

function MovieDetails({
  movie: {
    title, genres, release_date, poster_path, overview, runtime, vote_average,
  },
}) {
  return (
    <figure className={style.movieDetails}>
      <MovieImg src={poster_path} alt={title} />
      <figcaption>
        <h2>
          <MovieTitle title={title} />
          <MovieRating rating={vote_average} />
        </h2>
        <MovieGenre genres={genres} />
        <LabelRaised>{new Date(release_date).getFullYear()}</LabelRaised>
        <LabelRaised>{`${runtime} min`}</LabelRaised>
        <MovieOverview text={overview} />
      </figcaption>
    </figure>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
  }),
};

MovieDetails.defaultProps = {
  movie: {},
};

export default MovieDetails;
