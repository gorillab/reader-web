import React, { Component } from 'react';

import './PageTitle.scss';

class PageTitle extends Component {
  render() {
    return (
      <div className='page-title'>
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

export default PageTitle;
