import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function ResultCounter({ quantity }) {
  return (
    <b className={style.resultCounter}>{`${quantity} movie found`}</b>
  );
}

ResultCounter.propTypes = {
  quantity: PropTypes.number,
};

ResultCounter.defaultProps = {
  quantity: 0,
};

export default ResultCounter;
