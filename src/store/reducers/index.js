import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import { routerReducer } from './router-reducer';

const rootReducer = combineReducers({
  articleReducer,
  router: routerReducer,
  form
});

export default rootReducer;
