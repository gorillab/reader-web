import React, { Component } from 'react';

import './HeaderTitle.scss';

class HeaderTitle extends Component {
  render() {
    return (
      <div className="headerTitle">
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

export default HeaderTitle;
