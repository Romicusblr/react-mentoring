import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ButtonRaised from '../ButtonRaised';
import SearchInput from '../SearchInput';
import RadioSwitch from '../RadioSwitch';
import RadioButton from '../RadioButton';
import style from './SearchBar.module.css';

const SearchBar = ({
  history, className,
}) => {
  const { location: { search } = {} } = history;
  const searchParams = new URLSearchParams(search);

  const [state, setState] = useState({
    search: searchParams.get('search'),
    searchBy: searchParams.get('searchBy') || 'title',
  });

  const fetch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(state);
    history.push(`/search/?${params}`);
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
        switchValue={state.searchBy}
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

SearchBar.defaultProps = {
  className: '',
};

export default SearchBar;
