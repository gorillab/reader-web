import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Footer.scss';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    
    return (
	    <footer styleName='footer'>© Gorillab {year}</footer>
    );
  }
}

export default CSSModules(Footer, styles, {allowMultiple: true});
