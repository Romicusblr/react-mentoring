import React from 'react';
import PropTypes from 'prop-types';
import style from './RadioSwitch.module.css';

function RadioSwitch({ title, children, ...other }) {
  return (
    <div className={style.radioSwitch}>
      <span>{title}</span>
      {React.Children.map(children, child => React.cloneElement(child, { ...other }))}
    </div>
  );
}

RadioSwitch.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default RadioSwitch;
