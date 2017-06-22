import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './HeaderTitle.scss';

class HeaderTitle extends Component {
  render() {
    return (
      <div styleName='header-title'>
        <h5 styleName='h5'>{this.props.title}</h5>
      </div>
    );
  }
}

export default CSSModules(HeaderTitle, styles, {allowMultiple: true});
