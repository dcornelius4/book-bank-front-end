import { post, get } from './request';

export const makeLibrary = library => post('/libraries', library);
export const getLibraries = () => get('/libraries');
export const getLibrary = id => get(`/libraries/${id}`);
export const makeBook = (book, id) => post(`/libraries/${id}/${book}`);
