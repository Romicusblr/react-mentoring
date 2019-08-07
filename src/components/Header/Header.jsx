import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import Logo from '../Logo';
import style from './Header.module.css';

const Header = ({ className, ...other }) => (
  <header
    className={classNames(style.header, className)}
    {...other}
  >
    <Logo />
    <h1>find your movie</h1>
    <SearchBar />
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
