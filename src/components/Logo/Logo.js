import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/reader.png';
import styles from './Logo.scss';

class Logo extends Component {
  render() {
    return (
  		<Link to='/' className={styles.navbarBrand}>
  			<img src={logoImage} className={styles.logo} alt='' />
      </Link>
    );
  }
}

export default Logo;
