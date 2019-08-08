import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './ResultCounter.module.css';

function ResultCounter({ quantity, className, ...other }) {
  return (
    <b
      className={classNames(style.resultCounter, className)}
      {...other}
    >
      {`${quantity} movie found`}
    </b>
  );
}

ResultCounter.propTypes = {
  quantity: PropTypes.number,
  className: PropTypes.string,
};

ResultCounter.defaultProps = {
  className: '',
  quantity: 0,
};

export default ResultCounter;
