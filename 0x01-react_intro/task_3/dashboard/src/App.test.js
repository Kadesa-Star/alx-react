// src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('renders a div with class App-header', () => {
    expect(wrapper.find('.App-header').length).toBe(1);
  });

  test('renders a div with class App-body', () => {
    expect(wrapper.find('.App-body').length).toBe(1);
  });

  test('renders a div with class App-footer', () => {
    expect(wrapper.find('.App-footer').length).toBe(1);
  });
});
