import { getSources, subscribe, unsubscribe } from './actions';
import { getSources as selectSources, getSource } from './selectors';
import sourcesReducers from './reducers';

export {
  // actions
  getSources,
  subscribe,
  unsubscribe,
  // selectors
  selectSources,
  getSource,
};

export default sourcesReducers;
