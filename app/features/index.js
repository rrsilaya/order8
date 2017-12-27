import { combineReducers } from 'redux';

import global from './wrapper/duck';

const rootReducer = combineReducers({
  global
});

export default rootReducer;