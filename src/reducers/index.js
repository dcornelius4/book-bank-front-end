import { combineReducers } from 'redux';
import session from './sessionReducer';
import libraries from './libraryReducer';

export default combineReducers({
  session,
  libraries
});
