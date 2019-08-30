import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../../actions';
import MovieDetails from './MovieDetails';

const mapStateToProps = ({ currMovie }) => ({
  data: currMovie.data,
  loading: currMovie.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
