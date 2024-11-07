import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

// Mock the global alert function
global.alert = jest.fn();

describe("<App />", () => {
  it("App renders without any errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Verify if CourseList is displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('Verify if CourseList is displayed when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('calls logOut and shows alert when Ctrl+H is pressed', () => {
    const logOut = jest.fn();  // Mock the logOut function
    const wrapper = shallow(<App logOut={logOut} />);

    // Simulate the Ctrl+H key press
    const keyboardEvent = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    // Dispatch the keyboard event to trigger the handlePress function
    document.dispatchEvent(keyboardEvent);

    // Check if the alert function was called with the correct message
    expect(global.alert).toHaveBeenCalledWith('Logging you out');

    // Check if the logOut function was called
    expect(logOut).toHaveBeenCalled();

    // Clean up mocks
    jest.clearAllMocks();
  });

  it('removes event listener on component unmount', () => {
    const logOut = jest.fn();
    const wrapper = shallow(<App logOut={logOut} />);

    // Simulate componentWillUnmount by unmounting the wrapper
    wrapper.unmount();

    // Check if the event listener is removed
    // The keydown event handler should be detached when the component unmounts.
    // We do not expect the event handler to exist after unmount
    expect(wrapper.instance().componentWillUnmount).toHaveBeenCalled();
  });
});
