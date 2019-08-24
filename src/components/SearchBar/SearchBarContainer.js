import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../actions';
import SearchBar from './SearchBar';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;
