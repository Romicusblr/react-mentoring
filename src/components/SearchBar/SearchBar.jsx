import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ButtonRaised from '../ButtonRaised';
import SearchInput from '../SearchInput';
import RadioSwitch from '../RadioSwitch';
import RadioButton from '../RadioButton';
import style from './SearchBar.module.css';

const SearchBar = ({ fetchMovies, className, ...other }) => {
  const [state, setState] = useState({
    search: null,
    searchBy: 'title',
  });

  const fetch = (event) => {
    fetchMovies(state);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setState(prevState => ({ ...prevState, ...{ search: event.target.value } }));
    event.persist();
  };

  return (
    <form
      onSubmit={fetch}
      className={classNames(style.searchBar, className)}
      {...other}
    >
      <h2>find your movie</h2>
      <p>
        <SearchInput value={state.search} onInput={handleChange} />
        <ButtonRaised>search</ButtonRaised>
      </p>
      <RadioSwitch
        name="searchFilter"
        title="search by"
      >
        <RadioButton onClick={() => setState(prevState => ({ ...prevState, ...{ searchBy: 'title' } }))} value="title" defaultChecked />
        <RadioButton onClick={() => setState(prevState => ({ ...prevState, ...{ searchBy: 'genres' } }))} value="genres" />
      </RadioSwitch>
    </form>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  fetchMovies: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  className: '',
};

export default SearchBar;
