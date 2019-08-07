import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ButtonRaised from '../ButtonRaised';
import SearchInput from '../SearchInput';
import RadioSwitch from '../RadioSwitch';
import RadioButton from '../RadioButton';
import style from './SearchBar.module.css';

const SearchBar = ({ className, ...other }) => (
  <form
    className={classNames(style.searchBar, className)}
    {...other}
  >
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

SearchBar.propTypes = {
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  className: '',
};

export default SearchBar;
