import React from 'react';
import Button from '../Button';
import SearchInput from '../SearchInput';
import RadioSwitch from '../RadioSwitch';
import style from './style.module.css';

const SearchBar = () => (
  <form className={style.searchBar}>
    <p>
      <SearchInput />
      <Button />
    </p>
    <RadioSwitch
      name="searchFilter"
      title="search by"
      options={[{ name: 'title', checked: true }, { name: 'genre' }]}
    />
    <RadioSwitch
      name="sortFilter"
      title="sort by"
      options={[{ name: 'release date', checked: true }, { name: 'rating' }]}
    />
  </form>
);

export default SearchBar;
