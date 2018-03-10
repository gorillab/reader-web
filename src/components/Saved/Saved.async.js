import React from 'react';
import Loadable from 'react-loadable';

import Loading from '../Common/Loading';

const Saved = Loadable({
  loader: () => import('./Saved'),
  loading: Loading,
});

const SavedAsync = props => (
  <Saved {...props} />
);

export default SavedAsync;
