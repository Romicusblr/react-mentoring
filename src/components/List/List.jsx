import React from 'react';
import PropTypes from 'prop-types';
import style from './List.module.css';

function List({ genres, visibleGenres, delimeter }) {
  const renderGenres = genres.slice(0, visibleGenres);
  return (
    <ul className={style.list}>
      {delimeter
        ? <li>{renderGenres.join(delimeter)}</li>
        : renderGenres.map(genre => <li>{genre}</li>)}
    </ul>
  );
}

List.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line react/require-default-props
  visibleGenres: PropTypes.number,
  delimeter: PropTypes.string,
};

List.defaultProps = {
  genres: [],
  delimeter: '',
};

export default List;
