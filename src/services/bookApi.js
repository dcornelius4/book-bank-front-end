import { post, get } from './request';

export const makeLibrary = library => post('/libraries', library);
export const getLibrary = () => get('/libraries');
