import React, { Component } from 'react';

import styles from './MainContent.scss';

class MainContent extends Component {
  render() {
    return (
      <div className={styles.mainContent}>
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;
