import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './UpperContent.scss';

class UpperContent extends Component {
  render() {
    return (
      <div styleName='upper-content'>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(UpperContent, styles, {allowMultiple: true});
