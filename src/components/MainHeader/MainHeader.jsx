import React from 'react';
import PropTypes from 'prop-types';
import ResultCounter from '../ResultCounter';
import RadioSwitch from '../RadioSwitch';
import style from './style.module.css';


const MainHeader = ({ quantity }) => (
  <header className={style.mainHeader}>
    <ResultCounter quantity={quantity} />
    <RadioSwitch
      name="sortFilter"
      title="sort by"
      options={[{ name: 'release date', checked: true }, { name: 'rating' }]}
    />
  </header>
);

MainHeader.propTypes = {
  quantity: PropTypes.number,
};

MainHeader.defaultProps = {
  quantity: 0,
};

export default MainHeader;
