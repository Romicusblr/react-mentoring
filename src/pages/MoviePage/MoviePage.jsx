import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from '../../components/MovieDetails';

const MoviePage = ({ match }) => {
  const { id } = match.params;
  return (
    <>
      <MovieDetails id={id} />
    </>
  );
};

MoviePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default MoviePage;
