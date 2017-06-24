import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/reader.png';
import './Logo.scss';

class Logo extends Component {
  render() {
    return (
  		<Link to='/' className='navbar-brand'>
  			<img src={logoImage} className='logo' alt='' />
      </Link>
    );
  }
}

export default Logo;
