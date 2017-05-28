import React, { Component } from 'react';
import './logo.scss';
import Image from '../../assets/images/reader.png'
import { NavbarBrand } from 'reactstrap';

class Logo extends Component {
  state = {};

  render() {
    return (
  		<NavbarBrand href="/">
  			<img src={Image} width="30" height="30" className="d-inline-block align-top" alt="" />
        </NavbarBrand>
    );
  }
}

export default Logo;
