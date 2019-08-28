import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './BackToMain.module.css';

const BackToMain = ({ className, ...other }) => (
  <div
    className={classNames(style.back, className)}
    {...other}
  />
);

BackToMain.propTypes = {
  className: PropTypes.string,
};

BackToMain.defaultProps = {
  className: '',
};

export default BackToMain;
