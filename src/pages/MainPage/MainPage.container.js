import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions';
import MainPage from './MainPage';

const mapStateToProps = ({ movies }) => ({
  movies: movies.data,
  total: movies.total,
  loading: movies.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
