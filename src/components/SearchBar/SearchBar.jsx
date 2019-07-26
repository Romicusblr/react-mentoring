import React from 'react';
import Button from '../Button';
import SearchInput from '../SearchInput';
import SearchFilter from '../SearchFilter';
import style from './style.module.css';

const SearchBar = () => (
  <form className={style.searchBar}>
    <p>
      <SearchInput />
      <Button />
    </p>
    <SearchFilter
      title="search by"
      options={[{ name: 'title', checked: true }, { name: 'genre' }]}
    />
  </form>
);

export default SearchBar;
