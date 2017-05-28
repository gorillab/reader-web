import React, { Component } from 'react';
import './logo.scss';
import Image from '../../assets/images/reader.png'

class Logo extends Component {
  state = {};

  render() {
    return (
      	<img src={Image} width="30" height="30" className="d-inline-block align-top" alt="" />
    );
  }
}

export default Logo;
