import React from 'react';
import PropTypes from 'prop-types';

import './PageHeader.scss';

const propTypes = {
  children: PropTypes.any.isRequired,
};

const PageHeader = ({ children }) => (
  <div className="page-header">
    {children}
  </div>
);

PageHeader.propTypes = propTypes;

export default PageHeader;
