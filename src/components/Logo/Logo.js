import React, { Component } from 'react';
import './Logo.scss';
import Image from '../../assets/images/reader.png';
import { Link } from 'react-router-dom'

class Logo extends Component {
  state = {};

  render() {
    return (
  		<Link to="/" className="navbar-brand">
  			<img src={Image} width="30" height="30" className="Logo" alt="" />
      </Link>
    );
  }
}

export default Logo;
