/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import style from './RadioSwitch.module.css';

function RadioSwitch({ name, title, options }) {
  const buttons = options.map((option) => {
    // FIXME: hardcoded id
    const id = `${name}_${option.name}__${Math.random().toString().slice(2)}`;
    return (
      <p key={id}>
        <input type="radio" name={name} id={id} defaultChecked={option.checked} />
        <label htmlFor={id}>{option.name}</label>
      </p>
    );
  });
  return (
    <div className={style.radio}>
      <span>{title}</span>
      {buttons}
    </div>
  );
}
RadioSwitch.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.objectOf),
};

RadioSwitch.defaultProps = {
  name: '',
  title: '',
  options: [],
};

export default RadioSwitch;
