import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../actions';
import Main from './Main';

const mapStateToProps = ({ movies }) => ({
  data: movies,
  loading: movies.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
