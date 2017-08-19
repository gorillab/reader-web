import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import './SubscribeButton.scss';

const propTypes = {
  isSubscribed: PropTypes.bool.isRequired,
};

const SubscribeButton = ({ isSubscribed }) => (
  <div className="subscribe-button">
    <Button color="secondary" size="sm">{isSubscribed ? 'Unsubscribe' : 'Subscribe'}</Button>
  </div>
);

SubscribeButton.propTypes = propTypes;

export default SubscribeButton;
