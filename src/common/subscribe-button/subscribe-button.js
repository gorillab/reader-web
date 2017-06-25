import React, { Component } from 'react';
import './subscribe-button.scss';
import { Button } from 'reactstrap';

class SubscribeButton extends Component {
  state = {};

  render() {
    return (
      <div className="subscribe-button">
        <Button color="secondary" size="sm">Subscribe</Button>
      </div>
    );
  }
}

export default SubscribeButton;
