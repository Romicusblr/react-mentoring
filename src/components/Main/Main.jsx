import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SearchBody from '../SearchBody';
import MainHeader from '../MainHeader';
import style from './Main.module.css';
import Spinner from '../Spinner';

const Main = (props) => {
  const {
    data, className, fetchMovies, history, loading,
  } = props;

  const { location: { search } } = history;

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  if (loading) return <Spinner />;
  if (!data) return null;

  return (
    <main
      className={classNames(style.main, className)}
    >
      <MainHeader quantity={data.total} />
      <SearchBody movies={data.data} filters={search} />
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.objectOf),
    total: PropTypes.number,
  }),
  className: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string,
    }),
  }).isRequired,
};

Main.defaultProps = {
  className: '',
  data: null,
};

export default Main;
