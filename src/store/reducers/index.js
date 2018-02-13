import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import { routerReducer } from './router-reducer';
import streamReducer from './stream-reducer';

const rootReducer = combineReducers({
  streamReducer,
  router: routerReducer,
  form
});

export default rootReducer;
