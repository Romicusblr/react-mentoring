import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import style from './Footer.module.css';

const Footer = ({ className, ...other }) => (
  <footer
    className={classNames(style.footer, className)}
    {...other}
  >
    <Logo />
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
