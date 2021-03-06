import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import ResultCounter from '../ResultCounter';
import RadioSwitch from '../RadioSwitch';
import RadioButton from '../RadioButton';
import style from './MainHeader.module.css';

const MainHeader = ({
  history, quantity, className,
}) => {
  const { location: { search } = {} } = history;
  const searchParams = new URLSearchParams(search);

  const handleChange = (e) => {
    const { target: { value } } = e;
    searchParams.set('sortBy', value);
    history.push(`/search/?${searchParams}`);
    e.stopPropagation();
  };

  return (
    <header
      className={classNames(style.mainHeader, className)}
    >
      <ResultCounter quantity={quantity} />
      <RadioSwitch
        name="sortFilter"
        title="sort by"
        switchValue={searchParams.get('sortBy') || 'release_date'}
        onChange={handleChange}
      >
        <RadioButton value="release_date" />
        <RadioButton value="rating" />
      </RadioSwitch>
    </header>
  );
};

MainHeader.propTypes = {
  quantity: PropTypes.number,
  className: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

MainHeader.defaultProps = {
  className: '',
  quantity: 0,
};

export default withRouter(MainHeader);
