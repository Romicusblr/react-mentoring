/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function SearchFilter({ title, options }) {
  const buttons = options.map((option) => {
    // FIXME: hardcoded id
    const id = `${option}__${Math.random().toString().slice(2)}`;
    return (
      <p>
        <input type="radio" name="SearchFilter" id={id} checked={option.checked} />
        <label htmlFor={id}>{option.name}</label>
      </p>
    );
  });
  return (
    <p className={style.searchFilter}>
      <span>{title}</span>
      {buttons}
    </p>
  );
}

SearchFilter.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

SearchFilter.defaultProps = {
  title: '',
  options: [],
};

export default SearchFilter;
