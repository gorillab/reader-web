import React from 'react';
import PropTypes from 'prop-types';

import './Loading.scss';

const propTypes = {
  error: PropTypes.any,
  children: PropTypes.any,
};
const defaultProps = {
  error: undefined,
  children: undefined,
};

const Loading = ({ error, children }) => {
  if (error) {
    return (
      <div className="loading">Loading error!</div>
    );
  }

  return (
    <div className="loading">{children}</div>
  );
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
