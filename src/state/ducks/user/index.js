import { logOut, getUser } from './actions';
import isLoggedIn from './selectors';
import reducers from './reducers';

export {
  // actions
  logOut,
  getUser,
  // selectors
  isLoggedIn,
};

export default reducers;
