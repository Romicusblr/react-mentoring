import React from 'react';
import PropTypes from 'prop-types';
import ResultCounter from '../ResultCounter';
import RadioSwitch from '../RadioSwitch';
import RadioButton from '../RadioButton';
import style from './MainHeader.module.css';


const MainHeader = ({ quantity }) => (
  <header className={style.mainHeader}>
    <ResultCounter quantity={quantity} />
    <RadioSwitch name="sortFilter" title="sort by">
      <RadioButton value="release date" defaultChecked />
      <RadioButton value="rating" />
    </RadioSwitch>
  </header>
);

MainHeader.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default MainHeader;
