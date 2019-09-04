import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import SearchBarContainer from '../../components/SearchBar';
import MainHeader from '../../components/MainHeader';
import Main from '../../components/Main';
import Spinner from '../../components/Spinner';

const MainPage = (props) => {
  const {
    movies, total, fetchMovies, history, loading,
  } = props;

  const { location: { search } } = history;

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  if (loading) return <Spinner />;
  if (!movies) return null;

  return (
    <>
      <Header>
        <SearchBarContainer />
      </Header>
      <Main data={movies} search={search}>
        <MainHeader quantity={total} />
      </Main>
    </>
  );
};

MainPage.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.objectOf),
    total: PropTypes.number,
  }),
  loading: PropTypes.bool.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string,
    }),
  }).isRequired,
};

MainPage.defaultProps = {
  data: null,
};

export default MainPage;
