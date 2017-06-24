import React, { Component } from 'react';

import './HeaderTitle.scss';

class HeaderTitle extends Component {
  render() {
    return (
      <div className='header-title'>
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

export default HeaderTitle;
