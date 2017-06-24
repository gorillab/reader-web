import React, { Component } from 'react';

import './page-content.scss';

class PageContent extends Component {
  render() {
    return (
      <div className='page-content'>
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;
