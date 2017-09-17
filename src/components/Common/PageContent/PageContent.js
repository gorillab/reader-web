import React from 'react';
import PropTypes from 'prop-types';

import './PageContent.scss';

const propTypes = {
  children: PropTypes.any.isRequired,
};

const PageContent = ({ children }) => (
  <div className="page-content container">
    {children}
  </div>
);

PageContent.propTypes = propTypes;

export default PageContent;
