import React from 'react';
import ButtonRaised from '../ButtonRaised';
import SearchInput from '../SearchInput';
import RadioSwitch from '../RadioSwitch';
import RadioButton from '../RadioButton';
import style from './SearchBar.module.css';

const SearchBar = () => (
  <form className={style.searchBar}>
    <p>
      <SearchInput />
      <ButtonRaised>search</ButtonRaised>
    </p>
    <RadioSwitch name="searchFilter" title="search by">
      <RadioButton value="title" defaultChecked />
      <RadioButton value="genre" />
    </RadioSwitch>
  </form>
);

export default SearchBar;
