'use strict';

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  // THIS IS WHERE YOU LIST THE REDUCERS FROM ALL YOUR OTHER REDUCERS WITHIN THIS FILE
  routing
});

export default rootReducer;
