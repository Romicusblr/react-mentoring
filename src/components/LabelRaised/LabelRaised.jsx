import React from 'react';
import PropTypes from 'prop-types';
import style from './LabelRaised.module.css';

function LabelRaised({ children }) {
  return (
    <span className={style.labelRaised}>{children}</span>
  );
}

LabelRaised.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LabelRaised;
