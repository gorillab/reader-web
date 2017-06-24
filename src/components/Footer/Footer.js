import React, { Component } from 'react';

import styles from './Footer.scss';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    
    return (
	    <footer className={styles.footer}>© Gorillab {year}</footer>
    );
  }
}

export default Footer;
