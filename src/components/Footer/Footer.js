import React, { Component } from 'react';

import './Footer.scss';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    
    return (
	    <footer className='footer'>© Gorillab {year}</footer>
    );
  }
}

export default Footer;
