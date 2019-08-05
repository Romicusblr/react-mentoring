import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import style from './SearchBody.module.css';

const SearchBody = ({ data }) => (
  <div className={style.searchBody}>
    {data.map(movie => <MovieCard key={movie.id} movieData={movie} />)}
  </div>
);

SearchBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf),
};

SearchBody.defaultProps = {
  data: [],
};
export default SearchBody;
