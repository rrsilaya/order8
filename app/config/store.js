import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { middleware as pack } from 'redux-pack';

import reducers from '../features';

const config = {
  key: 'root',
  storage
};

const rdx = persistReducer(config, reducers);

export const store = createStore(
  rdx,
  {},
  applyMiddleware(logger, thunk, pack)
);


export const persistor = persistStore(store);