import React from 'react';
import SearchBar from '../SearchBar';
import Logo from '../Logo';
import style from './style.module.css';

const Header = () => (
  <header className={style.header}>
    <Logo />
    <h1>find your movie</h1>
    <SearchBar />
  </header>
);

export default Header;
