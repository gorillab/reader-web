import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import Loading from '../Common/Loading';

import { userSelectors } from '../../state/ducks/user';
import { sourcesSelectors } from '../../state/ducks/sources';

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

const propTypes = {
  match: PropTypes.any.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  getSource: PropTypes.func.isRequired,
};

const HomeAsync = ({ match, getSource, ...rest }) => {
  const source = match.params.source ? getSource(match.params.source) : undefined;
  const title = source ? source.title : 'Explore';

  return <Home title={title} source={source} {...rest} />;
};

HomeAsync.propTypes = propTypes;

const FinalHomeAsync = (props) => {
  const ConnectedHomeAsync = withRouter(connect(
    state => ({
      isLoggedIn: userSelectors.isLoggedIn(state),
      getSource: sourcesSelectors.getSource(state),
    }),
  )(HomeAsync));

  return <ConnectedHomeAsync {...props} />;
};

export default FinalHomeAsync;
