import { createAction } from 'promise-middleware-redux';
import { makeLibrary, getLibraries, getLibrary } from '../services/bookApi';

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

export const [
  fetchLibraryById,
  FETCH_LIBRARY_BY_ID,
  FETCH_LIBRARY_BY_ID_PENDING
] = createAction('FETCH_LIBRARY_BY_ID', getLibrary);
