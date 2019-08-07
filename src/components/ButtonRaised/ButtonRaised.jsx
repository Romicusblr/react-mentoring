/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './ButtonRaised.module.css';

function Button({
  type, children, className, ...other
}) {
  return (
    <button
      type={type}
      className={classNames(style.buttonRaised, className)}
      {...other}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
  className: '',
};

export default Button;
