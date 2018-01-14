import { Posts, Users } from '@gorillab/reader-js';


import { GET_HOME_POSTS, GET_FOR_YOU_POSTS, GET_SAVED_POSTS, GET_SOURCE_POSTS } from './types';

const getHomePosts = ({ sort = 'new', limit = 25, page = 1 }) => async (dispatch) => {
  try {
    const posts = await Posts.getPosts({
      limit,
      page,
      sort,
    });

    dispatch({
      type: GET_HOME_POSTS,
      posts,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const getForYouPosts = ({ sort = 'new', limit = 25, page = 1 }) => async (dispatch) => {
  try {
    const posts = await Users.getForYou({
      sort,
      limit,
      page,
    });

    dispatch({
      type: GET_FOR_YOU_POSTS,
      posts,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const getSavedPosts = ({ sort = 'new', limit = 25, page = 1 }) => async (dispatch) => {
  try {
    const posts = await Users.getSaved({
      sort,
      limit,
      page,
    });

    dispatch({
      type: GET_SAVED_POSTS,
      posts,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const getSourcePosts = ({ source, sort = 'new', limit = 25, page = 1 }) => async (dispatch) => {
  try {
    const posts = await Posts.getPosts({
      source,
      limit,
      page,
      sort,
    });

    dispatch({
      type: GET_SOURCE_POSTS,
      posts,
      source,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export {
  getHomePosts,
  getForYouPosts,
  getSavedPosts,
  getSourcePosts,
};
