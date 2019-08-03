import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchInput.module.css';

function SearchInput({ placeholder }) {
  return <input type="text" placeholder={placeholder} className={style.input} />;
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: 'type here',
};

export default SearchInput;
