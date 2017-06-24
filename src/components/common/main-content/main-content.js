import React, { Component } from 'react';

import './main-content.scss';

class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;
