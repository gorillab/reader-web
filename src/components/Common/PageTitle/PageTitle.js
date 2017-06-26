import React from 'react';
import PropTypes from 'prop-types';

import './PageTitle.scss';

const propTypes = {
  title: PropTypes.any.isRequired,
};

const PageTitle = ({ title }) => (
  <div className="page-title">
    <h5>{title}</h5>
  </div>
);

PageTitle.propTypes = propTypes;

export default PageTitle;
