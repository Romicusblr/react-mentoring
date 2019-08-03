import React from 'react';
import SearchBar from '../SearchBar';
import Logo from '../Logo';
import style from './Header.module.css';

const Header = () => (
  <header className={style.header}>
    <Logo />
    <h1>find your movie</h1>
    <SearchBar />
  </header>
);

export default Header;
