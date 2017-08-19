import { logOut, getUser } from './actions';
import isLoggedIn from './selectors';
import reducers from './reducers';

const userSelectors = {
  isLoggedIn,
};

export {
  // actions
  logOut,
  getUser,
  // selectors
  userSelectors,
};

export default reducers;
