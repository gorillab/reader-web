import React from 'react';
import Loadable from 'react-loadable';

import Loading from '../Common/Loading';

const ForYou = Loadable({
  loader: () => import('./ForYou'),
  loading: Loading,
});

const ForYouAsync = props => (
  <ForYou {...props} />
);

export default ForYouAsync;
