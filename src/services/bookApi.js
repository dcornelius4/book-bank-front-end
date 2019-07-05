import { post, get } from './request';

export const makeBook =  book => post('/books', book);
export const getBooks = books => get(`/books?library=${books}`);
