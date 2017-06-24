import React, { Component } from 'react';

import styles from './HeaderTitle.scss';

class HeaderTitle extends Component {
  render() {
    return (
      <div className={styles.headerTitle}>
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

export default HeaderTitle;
