import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import * as reducers from './ducks';

const history = createHistory();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState) => {
  const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer,
  });

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
      routerMiddleware(history),
      thunk,
    )),
  );
};

export default configureStore;

export {
  history,
};
