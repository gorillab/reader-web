import { INIT_DATA, LOG_OUT } from './types';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_DATA:
      return action.user ? {
        ...state,
        ...action.user,
      } : null;

    case LOG_OUT:
      return undefined;

    default:
      return state;
  }
};

export default userReducer;
