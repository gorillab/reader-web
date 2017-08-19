import GET_SOURCES from './types';

const initialState = [];

const sourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOURCES:
      return [
        ...state,
        ...action.sources,
      ];

    default:
      return state;
  }
};

export default sourcesReducer;
