import { combineReducers } from 'redux';
import session from './sessionReducer';
import libraries from './libraryReducer';
import detail from './libraryDetailReducer';

export default combineReducers({
  session,
  libraries,
  detail
});
