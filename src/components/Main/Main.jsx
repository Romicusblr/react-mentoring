import React from 'react';
import PropTypes from 'prop-types';
import SearchBody from '../SearchBody';
import MainHeader from '../MainHeader';
import style from './Main.module.css';

const Main = ({ data }) => (
  <main className={style.main}>
    <MainHeader quantity={data.total} />
    <SearchBody data={data.data} />
  </main>
);

Main.propTypes = {
  data: PropTypes.objectOf(),
};

Main.defaultProps = {
  data: {},
};

export default Main;
