import { newLibrary, fetchLibraries } from './libraryActions';

jest.mock('../services/libraryApi.js', () => ({
  makeLibrary() {
    return Promise.resolve([]);
  },
  getLibraries() {
    return Promise.resolve([]);
  },
  getLibrary() {
    return Promise.resolve([]);
  }
}));

describe('library action', () => {
  it('creates an action to post a library', () => {
    const libraryAction = newLibrary({
      placeName: 'Litbrary',
      address: '3000 litty street',
      description: 'being lit never ends'
    });

    expect(libraryAction).toEqual({
      type: 'NEW_LIBRARY',
      pendingType: 'NEW_LIBRARY_PENDING',
      payload: expect.any(Promise),
      fulfilledType: 'NEW_LIBRARY_FULFILLED',
      rejectedType: 'NEW_LIBRARY_REJECTED',
    });
  });

  it('creates an action to fetch libraries', () => {
    const libraryAction = fetchLibraries();

    expect(libraryAction).toEqual({
      type: 'FETCH_LIBRARIES',
      pendingType: 'FETCH_LIBRARIES_PENDING',
      payload: expect.any(Promise),
      fulfilledType: 'FETCH_LIBRARIES_FULFILLED',
      rejectedType: 'FETCH_LIBRARIES_REJECTED',
    });
  });
});
