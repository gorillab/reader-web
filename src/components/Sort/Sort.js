import React, { Component } from 'react';

import styles from './Sort.scss';

class Sort extends Component {
  render() {
    return (
      <div className={styles.sort}>
      	<ul>
      		<li className={styles.sortActive}>
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

export default Sort;
