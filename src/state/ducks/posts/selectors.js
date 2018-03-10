// eslint-disable-next-line arrow-body-style
const sort = (posts, sortBy) => {
  return sortBy === 'new' ?
    posts.sort(post => new Date(post.timestamp) - new Date()) :
    posts.sort((postF, postS) =>
      (postS.meta.numViewed + postS.meta.numShared + postS.meta.numSaved) -
      (postF.meta.numViewed + postF.meta.numShared + postF.meta.numSaved));
};

const getHomePosts = state => sortBy => (sort(Object.values(state.posts.home), sortBy));

const getForYouPosts = state => sortBy => (sort(Object.values(state.posts.forYou), sortBy));

const getSavedPosts = state => sortBy => (sort(Object.values(state.posts.saved), sortBy));

const getSourcePosts = state => (source, sortBy) => (
  sort(state.posts.sources[source] || [], sortBy)
);

export {
  getHomePosts,
  getForYouPosts,
  getSavedPosts,
  getSourcePosts,
};
