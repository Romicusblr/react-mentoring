import React from 'react';
import PropTypes from 'prop-types';
import style from './Rating.module.css';

function Rating({ children }) {
  return <span className={style.rating}>{children}</span>;
}

Rating.propTypes = {
  children: PropTypes.node,
};

Rating.defaultProps = {
  children: 0,
};

export default Rating;
