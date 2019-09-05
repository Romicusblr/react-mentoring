/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './RadioButton.module.css';

function RadioButton({
  value, name, defaultChecked, className, ...other
}) {
  const radioId = `${name}_${value}`;
  return (
    <p
      className={classNames(style.radioButton, className)}
      {...other}
    >
      <input type="radio" name={name} id={radioId} defaultChecked={defaultChecked} value={value} />
      <label htmlFor={radioId}>{value.replace('_', ' ')}</label>
    </p>
  );
}

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
};

RadioButton.defaultProps = {
  defaultChecked: false,
  className: '',
  name: 'radio',
};

export default RadioButton;
