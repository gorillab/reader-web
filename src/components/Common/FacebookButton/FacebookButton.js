import React from 'react';
import PropTypes from 'prop-types';
import './FacebookButton.scss';

const propTypes = {
  content: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

const FacebookButton = ({ content, classname, action }) => (
  <button
    className={`facebook-button ${classname}`}
    onClick={action}
  >
    {content}
  </button>
);

FacebookButton.propTypes = propTypes;

export default FacebookButton;
