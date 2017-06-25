import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './SubscribeButton.scss';

class SubscribeButton extends Component {
  render() {
    return (
      <div className="subscribe-button">
        <Button color="secondary" size="sm">Subscribe</Button>
      </div>
    );
  }
}

export default SubscribeButton;
