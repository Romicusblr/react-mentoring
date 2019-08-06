import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './SearchInput.module.css';

function SearchInput({ placeholder, className, ...other }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNames(style.input, className)}
      {...other}
    />
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: 'type here',
  className: '',
};

export default SearchInput;
