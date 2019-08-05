/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import style from './ButtonRaised.module.css';

function Button({ type, children, ...other }) {
  return <button type={type} className={style.button} {...other}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
};

export default Button;
