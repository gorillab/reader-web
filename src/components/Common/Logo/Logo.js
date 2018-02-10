import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => (
  <Link to="/" className="navbar-brand">
    <img src="/images/text-logo.png" className="logo" alt="" />
  </Link>
);

export default Logo;
