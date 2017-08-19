import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';

import { isLoggedIn } from '../../state/ducks/user';
import { getSource as getSourceFunc } from '../../state/ducks/sources';

const propTypes = {
  match: PropTypes.any.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  getSource: PropTypes.func.isRequired,
};

const HomeRender = ({ match, getSource, ...rest }) => {
  const source = match.params.source ? getSource(match.params.source) : undefined;
  const title = source ? source.title : 'Explore';

  return <Home title={title} source={source} {...rest} />;
};

HomeRender.propTypes = propTypes;

const FinalHomeRender = (props) => {
  const ConnectedHomeRender = connect(
    state => ({
      isLoggedIn: isLoggedIn(state),
      getSource: getSourceFunc(state),
    }),
  )(HomeRender);

  return <ConnectedHomeRender {...props} />;
};

export default FinalHomeRender;