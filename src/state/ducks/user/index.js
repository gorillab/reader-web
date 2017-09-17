import { logOut, getUser } from './actions';
import * as userSelectors from './selectors';
import reducers from './reducers';

export {
  // actions
  logOut,
  getUser,
  // selectors
  userSelectors,
};

export default reducers;
