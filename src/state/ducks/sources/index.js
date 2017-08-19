import getSources from './actions';
import { getSources as selectSources, getSource } from './selectors';
import sourcesReducers from './reducers';

export {
  // actions
  getSources,
  // selectors
  selectSources,
  getSource,
};

export default sourcesReducers;
