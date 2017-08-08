import { INIT_DATA } from '../user/types';

const initialState = [];

const sourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_DATA:
      return [
        ...state,
        ...action.sources,
      ];

    default:
      return state;
  }
};

export default sourcesReducer;
