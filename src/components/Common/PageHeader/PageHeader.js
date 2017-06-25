import React, { Component } from 'react';

import './PageHeader.scss';

class PageHeader extends Component {
  render() {
    return (
      <div className='page-header'>
        {this.props.children}
      </div>
    );
  }
}

export default PageHeader;
