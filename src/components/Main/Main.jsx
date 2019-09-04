import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SearchBody from '../SearchBody';
import style from './Main.module.css';

const Main = (props) => {
  const {
    data, className, search, children,
  } = props;

  return (
    <main
      className={classNames(style.main, className)}
    >
      {children}
      <SearchBody movies={data} filters={search} />
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf),
  search: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Main.defaultProps = {
  className: '',
  data: null,
  search: '',
  children: null,
};

export default Main;
