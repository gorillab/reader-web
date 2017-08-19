import { getSources, subscribe, unsubscribe } from './actions';
import * as sourcesSelectors from './selectors';
import sourcesReducers from './reducers';

export {
  // actions
  getSources,
  subscribe,
  unsubscribe,
  // selectors
  sourcesSelectors,
};

export default sourcesReducers;
