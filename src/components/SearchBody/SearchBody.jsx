import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import style from './style.module.css';

const SearchBody = ({ data }) => (
  <main className={style.searchBody}>
    {data.map(movie => <MovieCard key={movie.id} movieData={movie} />)}
  </main>
);

SearchBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf),
};

SearchBody.defaultProps = {
  data: [],
};
export default SearchBody;
