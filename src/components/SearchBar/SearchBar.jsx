import React from 'react';
import ButtonRaised from '../ButtonRaised';
import SearchInput from '../SearchInput';
import RadioSwitch from '../RadioSwitch';
import style from './SearchBar.module.css';

const SearchBar = () => (
  <form className={style.searchBar}>
    <p>
      <SearchInput />
      <ButtonRaised>search</ButtonRaised>
    </p>
    <RadioSwitch
      name="searchFilter"
      title="search by"
      options={[{ name: 'title', checked: true }, { name: 'genre' }]}
    />
  </form>
);

export default SearchBar;
