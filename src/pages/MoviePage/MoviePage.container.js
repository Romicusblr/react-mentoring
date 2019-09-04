import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../../actions';
import MoviePage from './MoviePage';

const mapStateToProps = ({ currMovie, movies }) => ({
  data: currMovie.data,
  loading: currMovie.loading,
  movies: movies.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
