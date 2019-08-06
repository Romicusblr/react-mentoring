/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import style from './RadioButton.module.css';

function RadioButton({ value, name, defaultChecked }) {
  const radioId = `${name}_${value}`;
  return (
    <p className={style.radioButton}>
      <input type="radio" name={name} id={radioId} defaultChecked={defaultChecked} />
      <label htmlFor={radioId}>{value}</label>
    </p>
  );
}

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
};

RadioButton.defaultProps = {
  defaultChecked: false,
};

export default RadioButton;
