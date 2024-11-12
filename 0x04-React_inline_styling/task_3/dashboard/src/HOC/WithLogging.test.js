import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';  // Import the Login component

describe('WithLogging HOC', () => {
  // Mock console.log to check the log output
  beforeAll(() => {
    global.console.log = jest.fn();
  });

  afterEach(() => {
    // Clear the mock after each test
    jest.clearAllMocks();
  });

  it('logs correctly for a pure HTML element', () => {
    // Wrap a simple component (pure HTML) with the HOC
    const WrappedComponent = WithLogging(() => <p />);

    // Shallow render the wrapped component
    shallow(<WrappedComponent />);

    // Test that console.log is called with the correct mount message
    expect(console.log).toHaveBeenCalledWith('Component is mounted');
    
    // Simulate unmounting the component
    shallow(<WrappedComponent />).unmount();

    // Test that console.log is called with the correct unmount message
    expect(console.log).toHaveBeenCalledWith('Component is going to unmount');
  });

  it('logs correctly for a named component (Login)', () => {
    // Wrap the Login component with the HOC
    const WrappedLogin = WithLogging(Login);

    // Shallow render the wrapped Login component
    shallow(<WrappedLogin />);

    // Test that console.log is called with the correct mount message for Login
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    
    // Simulate unmounting the component
    shallow(<WrappedLogin />).unmount();

    // Test that console.log is called with the correct unmount message for Login
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });

  // Restore the console.log after all tests
  afterAll(() => {
    global.console.log.mockRestore();
  });
});
