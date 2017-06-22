import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Sort.scss';

class Sort extends Component {
  render() {
    return (
      <div styleName='sort'>
      	<ul>
      		<li styleName='sort-active'>
            <a href=''>New</a>
      		</li>

      		<li>
            <a href=''>Best</a>
          </li>

          <li>
            <a href=''>Daily</a>
          </li>
      	</ul>
      </div>
    );
  }
}

export default CSSModules(Sort, styles, {allowMultiple: true});
