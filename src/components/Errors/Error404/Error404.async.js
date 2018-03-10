import React from 'react';
import Loadable from 'react-loadable';

import Loading from '../../Common/Loading';

const Error404 = Loadable({
  loader: () => import('./Error404'),
  loading: Loading,
});

const Error404Async = props => (
  <Error404 {...props} />
);

export default Error404Async;
