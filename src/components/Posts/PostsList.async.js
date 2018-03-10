import React from 'react';
import Loadable from 'react-loadable';

import Loading from '../Common/Loading';

const PostsList = Loadable({
  loader: () => import('./PostsList'),
  loading: Loading,
});

const PostsListAsync = props => (
  <PostsList {...props} />
);

export default PostsListAsync;
