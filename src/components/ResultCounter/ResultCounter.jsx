import React from 'react';
import PropTypes from 'prop-types';
import style from './ResultCounter.module.css';

function ResultCounter({ quantity }) {
  return (
    <b className={style.resultCounter}>{`${quantity} movie found`}</b>
  );
}

ResultCounter.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default ResultCounter;
