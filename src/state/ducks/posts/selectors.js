const sort = (posts, sortBy, source) => {
  if (source && posts[source] !== undefined) {
    return sortBy === 'new' ?
      posts[source].sort(post => new Date(post.timestamp) - new Date()) :
      posts[source].sort((postF, postS) =>
        (postS.meta.numViewed + postS.meta.numShared + postS.meta.numSaved) -
        (postF.meta.numViewed + postF.meta.numShared + postF.meta.numSaved));
  }
  return sortBy === 'new' ?
    posts.sort(post => new Date(post.timestamp) - new Date()) :
    posts.sort((postF, postS) =>
      (postS.meta.numViewed + postS.meta.numShared + postS.meta.numSaved) -
      (postF.meta.numViewed + postF.meta.numShared + postF.meta.numSaved));
};

const getHomePosts = state => sortBy => (
  sort(Object.values(state.posts.home), sortBy)
);

const getForYouPosts = state => sortBy => (
  sort(Object.values(state.posts.forYou), sortBy)
);

const getSavedPosts = state => sortBy => (
  sort(Object.values(state.posts.saved), sortBy)
);

const getSourcePosts = state => (sortBy, source) => (
  state.posts.sources[source] ? sort(state.posts.sources, sortBy, source) : 0
);

export {
  getHomePosts,
  getForYouPosts,
  getSavedPosts,
  getSourcePosts,
};
