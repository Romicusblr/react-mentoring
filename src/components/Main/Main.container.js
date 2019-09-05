import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions';
import Main from './Main';

const mapStateToProps = ({ movies }) => ({
  data: movies,
  loading: movies.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
