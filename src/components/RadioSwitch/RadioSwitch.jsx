import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './RadioSwitch.module.css';

function RadioSwitch({
  title, children, className, ...other
}) {
  return (
    <div
      className={classNames(style.radioSwitch, className)}
      {...other}
    >
      <span>{title}</span>
      {React.Children.map(children, child => React.cloneElement(child, { ...other }))}
    </div>
  );
}

RadioSwitch.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

RadioSwitch.defaultProps = {
  className: '',
};

export default RadioSwitch;
