import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './logo.scss';

class Logo extends Component {
  render() {
    return (
  		<Link to='/' className='navbar-brand'>
  			<img src='/images/logo.png' className='logo' alt='' />
      </Link>
    );
  }
}

export default Logo;
