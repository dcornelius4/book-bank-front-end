import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([]);
  },
  handleCheck() {
    return Promise.resolve([]);
  }
}));

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


describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
