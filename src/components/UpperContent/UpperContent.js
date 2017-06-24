import React, { Component } from 'react';

import styles from './UpperContent.scss';

class UpperContent extends Component {
  render() {
    return (
      <div className={styles.upperContent}>
        {this.props.children}
      </div>
    );
  }
}

export default UpperContent;
