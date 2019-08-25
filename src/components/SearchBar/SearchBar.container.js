import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../actions';
import SearchBar from './SearchBar';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
