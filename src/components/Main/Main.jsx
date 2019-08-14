import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SearchBody from '../SearchBody';
import MainHeader from '../MainHeader';
import style from './Main.module.css';

const Main = ({ data, className, ...other }) => {
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
};

Main.defaultProps = {
  className: '',
  data: null,
};

export default Main;
