import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
};

const Footer = ({ className }) => (
  <footer className={`footer ${className || ''}`}><a href="https://gorillab.co/">Gorillab</a> <span className="heart">♥︎</span> You</footer>
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
