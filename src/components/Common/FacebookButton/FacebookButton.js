import React from 'react';
import PropTypes from 'prop-types';
import './FacebookButton.scss';

const propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

const FacebookButton = ({ content, className, action }) => (
  <button
    className={`facebook-button ${className}`}
    onClick={action}
  >
    {content}
  </button>
);

FacebookButton.propTypes = propTypes;

export default FacebookButton;
