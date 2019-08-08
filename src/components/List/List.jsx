import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './List.module.css';

function List({
  items, limit, delimeter, className, ...other
}) {
  if (!items) return null;

  const renderItems = items.slice(0, limit);

  return (
    <ul
      className={classNames(style.list, className)}
      {...other}
    >
      {delimeter
        ? <li>{renderItems.join(delimeter)}</li>
        : renderItems.map(genre => <li key={genre}>{genre}</li>)}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  limit: PropTypes.number,
  delimeter: PropTypes.string,
  className: PropTypes.string,
};

List.defaultProps = {
  items: null,
  delimeter: '',
  limit: undefined,
  className: '',
};

export default List;
