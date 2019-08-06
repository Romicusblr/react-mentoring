import React from 'react';
import PropTypes from 'prop-types';
import style from './List.module.css';

function List({ items, limit, delimeter }) {
  const renderItems = items.slice(0, limit);
  return (
    <ul className={style.list}>
      {delimeter
        ? <li>{renderItems.join(delimeter)}</li>
        : renderItems.map(genre => <li>{genre}</li>)}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  limit: PropTypes.number,
  delimeter: PropTypes.string,
};

List.defaultProps = {
  items: [],
  delimeter: '',
  limit: undefined,
};

export default List;
