import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  state = {};

  render() {
    const year = new Date().getFullYear();
    return (
	    <footer className="text-center footer">
	       <p>© Gorillab {year}</p>
	    </footer>
    );
  }
}

export default Footer;
