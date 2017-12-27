import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { middleware as pack } from 'redux-pack';

import reducers from '../features';

const store = createStore(
  reducers,
  {},
  applyMiddleware(logger, thunk, pack)
);

export default store;