import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function Button({ name }) {
  return <button type="submit" className={style.button}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'search',
};

export default Button;
