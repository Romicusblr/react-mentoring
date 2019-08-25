/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import MovieYear from '../MovieYear';
import List from '../List';
import style from './MovieCard.module.css';

function MovieCard({
  movie, className, ...other
}) {
  if (!movie) return null;

  const {
    id, title, genres, release_date, poster_path,
  } = movie;

  return (
    <Link to={`/film/${id}`}>
      <figure
        className={classNames(style.movieCard, className)}
        {...other}
      >
        <img src={poster_path} alt={title} />
        <figcaption>
          <h3 className={style.title}>
            {title}
            <MovieYear year={new Date(release_date).getFullYear()} />
          </h3>
          <List items={genres} limit={2} delimeter=" &amp; " />
        </figcaption>
      </figure>
    </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
  }),
  className: PropTypes.string,
};

MovieCard.defaultProps = {
  movie: null,
  className: '',
};

export default MovieCard;
