import reducer from './libraryReducer';


jest.mock('../services/libraryApi.js');

describe('Library reducer', () => {
  it('Handles the NEW_LIBRARY_PENDING', () => {

    const initialState = {
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: 'NEW_LIBRARY_PENDING'
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });
});
