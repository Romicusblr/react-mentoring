/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import LabelRaised from '../LabelRaised';
import Rating from '../Rating';
import List from '../List';

import style from './MovieDetails.module.css';

function MovieDetails({
  movie: {
    title, genres, release_date, poster_path, overview, runtime, vote_average,
  },
}) {
  return (
    <figure className={style.movieDetails}>
      <img src={poster_path} alt={title} />
      <figcaption>
        <h1 className={style.title}>
          <span>{title}</span>
          <Rating>{vote_average.toFixed(1)}</Rating>
        </h1>
        <p className={style.label}>
          <LabelRaised>{new Date(release_date).getFullYear()}</LabelRaised>
          <LabelRaised>{`${runtime} min`}</LabelRaised>
        </p>
        <List items={genres} limit={2} delimeter=" &amp; " />
        <p>{overview}</p>
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
