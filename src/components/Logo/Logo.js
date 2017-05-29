import React, { Component } from 'react';
import './Logo.css';
import Image from '../../assets/images/reader.png';
import { Link } from 'react-router-dom'

class Logo extends Component {
  state = {};

  render() {
    return (
  		<Link to="/" className="navbar-brand">
  			<img src={Image} className="logo" alt="" />
      </Link>
    );
  }
}

export default Logo;
