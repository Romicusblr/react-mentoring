import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import SearchBody from '../SearchBody';
import MainHeader from '../MainHeader';
import style from './Main.module.css';
import { fetchMovies } from '../../actions';

const Main = ({ data, className, ...other }) => {
  if (!data) return null;
  return (
    <main
      className={classNames(style.main, className)}
      {...other}
    >
      <MainHeader quantity={data.total} />
      <SearchBody movies={data.data} />
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.objectOf),
    total: PropTypes.number,
  }),
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
  data: null,
};

class MainContainer extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { fetchMovies } = this.props;

    fetchMovies();
  }

  render() {
    const { movies } = this.props;
    return <Main data={movies} />;
  }
}

MainContainer.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.objectOf),
    total: PropTypes.number,
  }),
};

MainContainer.defaultProps = {
  movies: null,
};

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = dispatch => ({
  fetchMovies: fetchMovies(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
