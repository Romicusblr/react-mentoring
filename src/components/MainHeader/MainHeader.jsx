import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ResultCounter from '../ResultCounter';
import RadioSwitch from '../RadioSwitch';
import RadioButton from '../RadioButton';
import style from './MainHeader.module.css';

const MainHeader = ({ quantity, className, ...other }) => {
  const handleChange = () => {};

  return (
    <header
      className={classNames(style.mainHeader, className)}
      {...other}
    >
      <ResultCounter quantity={quantity} />
      <RadioSwitch
        name="sortFilter"
        title="sort by"
        switchValue="release date"
        onChange={handleChange}
      >
        <RadioButton value="release date" />
        <RadioButton value="rating" />
      </RadioSwitch>
    </header>
  );
};

MainHeader.propTypes = {
  quantity: PropTypes.number,
  className: PropTypes.string,
};

MainHeader.defaultProps = {
  className: '',
  quantity: 0,
};

export default MainHeader;
