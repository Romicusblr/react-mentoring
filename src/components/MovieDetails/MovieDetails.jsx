/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LabelRaised from '../LabelRaised';
import Rating from '../Rating';
import Spinner from '../Spinner';
import List from '../List';

import style from './MovieDetails.module.css';

function MovieDetails(props) {
  const {
    data, className, loading, ...other
  } = props;

  if (loading) return <Spinner />;
  if (!data) return null;

  const {
    title, genres, release_date, vote_average,
    poster_path, overview, runtime,
  } = data;

  return (
    <figure
      className={classNames(style.movieDetails, className)}
      {...other}
    >
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
  loading: PropTypes.bool,
  data: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};

MovieDetails.defaultProps = {
  data: null,
  loading: false,
  className: '',
};

export default MovieDetails;
