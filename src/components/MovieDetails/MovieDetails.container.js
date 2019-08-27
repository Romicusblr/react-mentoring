import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchMovie } from '../../actions';
import MovieDetails from './MovieDetails';

const mapStateToProps = ({ currMovie }) => ({
  data: currMovie.data,
  loading: currMovie.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovie,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));
