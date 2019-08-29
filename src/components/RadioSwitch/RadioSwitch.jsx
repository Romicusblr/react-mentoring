import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './RadioSwitch.module.css';

function RadioSwitch({
  title, children, className, switchValue, ...other
}) {
  return (
    <div
      className={classNames(style.radioSwitch, className)}
      {...other}
    >
      <span>{title}</span>
      {React.Children.map(children, (child) => {
        const defaultChecked = switchValue === child.props.value;
        return React.cloneElement(child, { defaultChecked, ...other });
      })}
    </div>
  );
}

RadioSwitch.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  switchValue: PropTypes.string.isRequired,
};

RadioSwitch.defaultProps = {
  className: '',
};

export default RadioSwitch;
