import { GET_USER, LOG_OUT } from './types';
import { SUBSCRIBE, UNSUBSCRIBE } from '../sources/types';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user ? {
        ...state,
        ...action.user,
      } : null;

    case SUBSCRIBE:
      return {
        ...state,
        sources: [
          ...state.sources,
          action.source.id,
        ],
      };

    case UNSUBSCRIBE:
      return {
        ...state,
        sources: state.sources.filter(source => source !== action.source.id),
      };

    case LOG_OUT:
      return null;

    default:
      return state;
  }
};

export default userReducer;
