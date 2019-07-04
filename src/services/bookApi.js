import { post } from './request';

export const makeLibrary = library => post('/libraries', library);
