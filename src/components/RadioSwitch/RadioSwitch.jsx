/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function RadioSwitch({ name, title, options }) {
  const buttons = options.map((option) => {
    // FIXME: hardcoded id
    const id = `${name}_${option}__${Math.random().toString().slice(2)}`;
    return (
      <p>
        <input type="radio" name={name} id={id} checked={option.checked} />
        <label htmlFor={id}>{option.name}</label>
      </p>
    );
  });
  return (
    <p className={style.radio}>
      <span>{title}</span>
      {buttons}
    </p>
  );
}

RadioSwitch.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

RadioSwitch.defaultProps = {
  name: '',
  title: '',
  options: [],
};

export default RadioSwitch;
