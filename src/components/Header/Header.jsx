import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import style from './Header.module.css';

const Header = ({ className, children, ...other }) => (
  <section
    className={classNames(style.header, className)}
    {...other}
  >
    <header>
      <Logo />
    </header>
    {children}
  </section>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
