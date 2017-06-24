import React, { Component } from 'react';

import './UpperContent.scss';

class UpperContent extends Component {
  render() {
    return (
      <div className='upper-content'>
        {this.props.children}
      </div>
    );
  }
}

export default UpperContent;
