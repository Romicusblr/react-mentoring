import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ButtonRaised from '../ButtonRaised';
import SearchInput from '../SearchInput';
import RadioSwitch from '../RadioSwitch';
import RadioButton from '../RadioButton';
import style from './SearchBar.module.css';

const SearchBar = ({
  history, fetchMovies, className,
}) => {
  const [state, setState] = useState({
    search: '',
    searchBy: 'title',
  });

  const fetch = (e) => {
    const { location: { pathname, search } = {} } = history;
    const searchParams = new URLSearchParams(search);
    Object.keys(state).forEach((key) => {
      searchParams.set(key, state[key]);
    });
    history.push(`${pathname}?${searchParams}`);

    fetchMovies(search);
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    setState(prevState => ({ ...prevState, ...{ [name]: value } }));
    e.stopPropagation();
  };

  return (
    <form
      onSubmit={fetch}
      className={classNames(style.searchBar, className)}
    >
      <h2>find your movie</h2>
      <p>
        <SearchInput name="search" value={state.search} onChange={handleChange} />
        <ButtonRaised>search</ButtonRaised>
      </p>
      <RadioSwitch
        name="searchBy"
        title="search by"
        switchValue="title"
        onChange={handleChange}
      >
        <RadioButton value="title" />
        <RadioButton value="genres" />
      </RadioSwitch>
    </form>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  fetchMovies: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

SearchBar.defaultProps = {
  className: '',
};

export default SearchBar;
