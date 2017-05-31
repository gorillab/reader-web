import React, { Component } from 'react';
import './HeaderTitle.css';

class HeaderTitle extends Component {
  state = {};

  render() {
    return (
      <div className="header-title">
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

export default HeaderTitle;
