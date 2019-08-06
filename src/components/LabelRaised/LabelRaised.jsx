import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './LabelRaised.module.css';

function LabelRaised({ children, className, ...other }) {
  return (
    <span
      className={classNames(style.labelRaised, className)}
      {...other}
    >
      {children}
    </span>
  );
}

LabelRaised.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

LabelRaised.defaultProps = {
  className: '',
};

export default LabelRaised;
