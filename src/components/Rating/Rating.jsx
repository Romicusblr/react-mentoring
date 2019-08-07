import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Rating.module.css';

function Rating({ children, className, ...other }) {
  return (
    <span
      className={classNames(style.rating, className)}
      {...other}
    >
      {children}
    </span>
  );
}

Rating.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Rating.defaultProps = {
  className: '',
};

export default Rating;
