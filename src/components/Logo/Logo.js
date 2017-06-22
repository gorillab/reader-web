import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/reader.png';
import styles from './Logo.scss';

class Logo extends Component {
  render() {
    return (
  		<Link to='/' styleName='navbar-brand'>
  			<img src={logoImage} styleName='logo' alt='' />
      </Link>
    );
  }
}

export default CSSModules(Logo, styles, {allowMultiple: true});
