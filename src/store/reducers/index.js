import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import list from './list';
import movie from './movie';

// Creates the main reducer with the dynamically injected ones
export default combineReducers({
  // React-Router-Redux
  routing: routerReducer,
  // our recucers
  list,
  movie
});
