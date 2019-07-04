import { createAction } from 'promise-middleware-redux';
import { makeLibrary, getLibraries } from '../services/bookApi';

export const [
  newLibrary,
  NEW_LIBRARY,
  NEW_LIBRARY_PENDING
] = createAction('NEW_LIBRARY', makeLibrary);

export const [
  fetchLibraries,
  FETCH_LIBRARIES,
  FETCH_LIBRARIES_PENDING
] = createAction('FETCH_LIBRARIES', getLibraries);
