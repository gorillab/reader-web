import { GET_USER, LOG_OUT } from './types';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user ? {
        ...state,
        ...action.user,
      } : null;

    case LOG_OUT:
      return null;

    default:
      return state;
  }
};

export default userReducer;
