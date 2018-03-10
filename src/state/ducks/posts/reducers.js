import { GET_HOME_POSTS, GET_FOR_YOU_POSTS, GET_SAVED_POSTS, GET_SOURCE_POSTS } from './types';

const initialState = {
  home: [],
  forYou: [],
  saved: [],
  sources: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_POSTS:
      return {
        ...state,
        home: [...state.home, ...action.posts],
      };
    case GET_FOR_YOU_POSTS:
      return {
        ...state,
        forYou: action.posts,
      };
    case GET_SAVED_POSTS:
      return {
        ...state,
        saved: action.posts,
      };
    case GET_SOURCE_POSTS:
      return {
        ...state,
        sources: {
          ...state.sources,
          [action.source]: [...action.posts],
        },
      };
    default:
      return state;
  }
};

export default postsReducer;
