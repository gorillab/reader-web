import React, { Component } from 'react';

import './PageContent.scss';

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
