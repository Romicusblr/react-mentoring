import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './Logo.module.css';

function Logo({ className, ...other }) {
  return (
    <Link
      to="/"
      className={classNames(style.logo, className)}
      {...other}
    >
      <h3>
        <strong>netflix</strong>
      roulette
      </h3>
    </Link>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
