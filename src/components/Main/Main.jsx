import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SearchBody from '../SearchBody';
import MainHeader from '../MainHeader';
import style from './Main.module.css';

const Main = ({
  data, className, loading, fetchMovies, ...other
}) => {
  if (loading) {
    return <div>loadin...</div>;
  }
  if (!data) return null;

  useEffect(() => {
    fetchMovies();
    return () => {};
  });

  return (
    <main
      className={classNames(style.main, className)}
      {...other}
    >

      <MainHeader quantity={data.total} />
      <button type="button" onClick={() => { fetchMovies(); }} />
      <SearchBody loading={loading} movies={data.data} />

    </main>
  );
};

Main.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.objectOf),
    total: PropTypes.number,
  }),
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
  data: null,
};

export default Main;
