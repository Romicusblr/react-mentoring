import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SearchBody from '../SearchBody';
import MainHeader from '../MainHeader';
import style from './Main.module.css';
import Spinner from '../Spinner';

const Main = (props) => {
  const {
    data, className, fetchMovies, loading, ...other
  } = props;

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <Spinner />;
  if (!data) return null;
  return (
    <main
      className={classNames(style.main, className)}
      {...other}
    >
      <MainHeader quantity={data.total} />
      <SearchBody movies={data.data} />
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
};

Main.defaultProps = {
  className: '',
  data: null,
};

export default Main;
