import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';
import Main from './Main';

const mapStateToProps = state => ({
  data: state.movies,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: fetchMovies(dispatch),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
