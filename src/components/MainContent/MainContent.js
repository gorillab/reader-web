import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './MainContent.scss';

class MainContent extends Component {
  render() {
    return (
      <div styleName='main-content'>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(MainContent, styles, {allowMultiple: true});
