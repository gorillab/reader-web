import { GET_SOURCES, SUBSCRIBE, UNSUBSCRIBE } from './types';

const initialState = {};

const sourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOURCES:
      return {
        ...state,
        ...action.sources.reduce((sources, source) => {
          sources[source.id] = source;
          return sources;
        }, {}),
      };

    case SUBSCRIBE:
      return {
        ...state,
        [action.source.id]: {
          ...state[action.source.id],
          ...action.source,
        },
      };

    case UNSUBSCRIBE:
      return {
        ...state,
        [action.source.id]: {
          ...state[action.source.id],
          ...action.source,
        },
      };

    default:
      return state;
  }
};

export default sourcesReducer;
