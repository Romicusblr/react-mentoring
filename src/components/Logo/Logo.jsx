import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './Logo.module.css';

function Logo({ className, ...other }) {
  return (
    <h3
      className={classNames(style.logo, className)}
      {...other}
    >
      <strong>netflix</strong>
      roulette
    </h3>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
