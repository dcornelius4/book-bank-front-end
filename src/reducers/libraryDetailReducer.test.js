import reducer from './libraryDetailReducer';

jest.mock('../services/auth.js');
jest.mock('../services/libraryApi.js');

describe('LIBRARY DETAIL REDUCER TEST', () => {
  it('handle the loading detail action', () => {
    const initialState = {
      loading: false,
      detail: {}
    };

    const newState = reducer(initialState, {
      type: 'FETCH_LIBRARY_BY_ID_PENDING',
    });
    expect(newState).toEqual({
      loading: true,
      detail: {}
    });
  });
});
