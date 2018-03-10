import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Button } from 'reactstrap';

import './SubscribeButton.scss';

import { subscribe, unsubscribe } from '../../../state/ducks/sources';

const propTypes = {
  source: PropTypes.any.isRequired,
  subscribe: PropTypes.func.isRequired,
  unsubscribe: PropTypes.func.isRequired,
};

export const SubscribeButton = props => (
  <div className="subscribe-button">
    <Button
      name="subscribe"
      color="secondary"
      size="sm"
      onClick={() => {
        if (props.source.isSubscribed) {
          props.unsubscribe(props.source.id);
        } else {
          props.subscribe(props.source.id);
        }
      }}
    >{props.source.isSubscribed ? 'Subscribed' : 'Subscribe'}</Button>
  </div>
);

SubscribeButton.propTypes = propTypes;

export default withRouter(connect(
  () => ({}), {
    subscribe,
    unsubscribe,
  },
)(SubscribeButton));
