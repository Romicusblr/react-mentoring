import React from 'react';
import ResultCounter from '../ResultCounter';
import RadioSwitch from '../RadioSwitch';
import style from './style.module.css';

const MainHeader = () => (
  <header className={style.mainHeader}>
    <ResultCounter />
    <RadioSwitch
      name="sortFilter"
      title="sort by"
      options={[{ name: 'release date', checked: true }, { name: 'rating' }]}
    />
  </header>
);

export default MainHeader;
