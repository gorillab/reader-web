import GET_SOURCES from './types';

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

    default:
      return state;
  }
};

export default sourcesReducer;
