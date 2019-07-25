import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ name }) {
  return <button type="submit">{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'search',
};

export default Button;
