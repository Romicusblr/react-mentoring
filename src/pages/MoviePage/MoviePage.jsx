import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import MovieDetails from '../../components/MovieDetails';
import Main from '../../components/Main';
import Layout from '../Layout';

const MoviePage = ({ match, fetchMovie, ...other }) => {
  const { id } = match.params;

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  return (
    <Layout>
      <Header>
        <MovieDetails id={id} {...other} />
      </Header>
      <Main />
    </Layout>
  );
};

MoviePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  id: PropTypes.string.isRequired,
  fetchMovie: PropTypes.func.isRequired,
};

export default MoviePage;
