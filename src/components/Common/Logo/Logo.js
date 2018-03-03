import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => (
  <Link to="/" className="navbar-brand logo">
    <img src="/images/text-logo.png" alt="" />
  </Link>
);

export default Logo;
