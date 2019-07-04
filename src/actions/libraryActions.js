import { createAction } from 'promise-middleware-redux';
import { makeLibrary } from '../services/bookApi';

export const [
  newLibrary,
  NEW_LIBRARY,
  NEW_LIBRARY_PENDING
] = createAction('NEW_LIBRARY', makeLibrary);

