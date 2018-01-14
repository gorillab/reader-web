import { getHomePosts, getForYouPosts, getSavedPosts, getSourcePosts } from './actions';
import * as postsSelectors from './selectors';
import postsReducers from './reducers';

export {
  // actions
  getHomePosts,
  getForYouPosts,
  getSavedPosts,
  getSourcePosts,
  // selectors
  postsSelectors,
};

export default postsReducers;
