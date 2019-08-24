import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './SearchInput.module.css';

function SearchInput({
  onInput, placeholder, className, ...other
}) {
  return (
    <input
      onInput={onInput}
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
  onInput: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  placeholder: 'type here',
  className: '',
};

export default SearchInput;
