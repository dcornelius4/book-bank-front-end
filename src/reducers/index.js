import { combineReducers } from 'redux';
import session from './sessionReducer';
import libraries from './libraryReducer';
import detail from './libraryDetailReducer';
import book from './bookReducer';

export default combineReducers({
  session,
  libraries,
  detail,
  book
});
