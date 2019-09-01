import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../actions';
import SearchBar from './SearchBar';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
