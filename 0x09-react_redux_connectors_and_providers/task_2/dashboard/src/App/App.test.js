import React from 'react';
import { shallow } from 'enzyme';
import App from './App';  // Assuming you're importing the stateless App component now
import { Notifications } from '../Notifications/Notifications';
import { BodySectionWithMarginBottom } from '../BodySection/BodySectionWithMarginBottom';
import { CourseList } from '../CourseList/CourseList';
import { Login } from '../Login/Login';
import { LOGIN_SUCCESS, LOGOUT } from '../actions/uiActionTypes';  // Assuming these are your action types

describe('<App />', () => {
  let wrapper;
  let mockDisplayNotificationDrawer;
  let mockHideNotificationDrawer;
  let mockLogOut;

  beforeEach(() => {
    mockDisplayNotificationDrawer = jest.fn();
    mockHideNotificationDrawer = jest.fn();
    mockLogOut = jest.fn();
  });

  it('renders without crashing', () => {
    wrapper = shallow(
      <App
        isLoggedIn={false}
        displayDrawer={false}
        displayNotificationDrawer={mockDisplayNotificationDrawer}
        hideNotificationDrawer={mockHideNotificationDrawer}
        logOut={mockLogOut}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Notifications component with the correct props', () => {
    wrapper = shallow(
      <App
        isLoggedIn={false}
        displayDrawer={true}
        displayNotificationDrawer={mockDisplayNotificationDrawer}
        hideNotificationDrawer={mockHideNotificationDrawer}
        logOut={mockLogOut}
      />
    );

    const notifications = wrapper.find(Notifications);
    expect(notifications.length).toBe(1);
    expect(notifications.props().displayDrawer).toBe(true);
    expect(notifications.props().handleDisplayDrawer).toBe(mockDisplayNotificationDrawer);
    expect(notifications.props().handleHideDrawer).toBe(mockHideNotificationDrawer);
  });

  it('renders CourseList when logged in', () => {
    wrapper = shallow(
      <App
        isLoggedIn={true}
        displayDrawer={false}
        displayNotificationDrawer={mockDisplayNotificationDrawer}
        hideNotificationDrawer={mockHideNotificationDrawer}
        logOut={mockLogOut}
      />
    );

    const bodySectionWithMarginBottom = wrapper.find(BodySectionWithMarginBottom);
    expect(bodySectionWithMarginBottom.length).toBe(1);
    expect(bodySectionWithMarginBottom.props().title).toBe('Course list');
    expect(bodySectionWithMarginBottom.find(CourseList).length).toBe(1);
  });

  it('renders Login component when not logged in', () => {
    wrapper = shallow(
      <App
        isLoggedIn={false}
        displayDrawer={false}
        displayNotificationDrawer={mockDisplayNotificationDrawer}
        hideNotificationDrawer={mockHideNotificationDrawer}
        logOut={mockLogOut}
      />
    );

    const bodySectionWithMarginBottom = wrapper.find(BodySectionWithMarginBottom);
    expect(bodySectionWithMarginBottom.length).toBe(1);
    expect(bodySectionWithMarginBottom.props().title).toBe('Login in to continue');
    expect(bodySectionWithMarginBottom.find(Login).length).toBe(1);
  });

  // Test Redux-related functionality by simulating the login/logout actions
  it('dispatches LOGIN_SUCCESS when logged in', () => {
    const mockDispatch = jest.fn();
    const action = { type: LOGIN_SUCCESS, payload: { email: 'user@test.com' } };

    wrapper = shallow(
      <App
        isLoggedIn={true}
        displayDrawer={false}
        displayNotificationDrawer={mockDisplayNotificationDrawer}
        hideNotificationDrawer={mockHideNotificationDrawer}
        logOut={mockLogOut}
        dispatch={mockDispatch}
      />
    );

    // Simulate dispatching LOGIN_SUCCESS action
    mockDispatch(action);
    expect(mockDispatch).toHaveBeenCalledWith(action);
  });

  it('dispatches LOGOUT when logged out', () => {
    const mockDispatch = jest.fn();
    const action = { type: LOGOUT };

    wrapper = shallow(
      <App
        isLoggedIn={true}
        displayDrawer={false}
        displayNotificationDrawer={mockDisplayNotificationDrawer}
        hideNotificationDrawer={mockHideNotificationDrawer}
        logOut={mockLogOut}
        dispatch={mockDispatch}
      />
    );

    // Simulate dispatching LOGOUT action
    mockDispatch(action);
    expect(mockDispatch).toHaveBeenCalledWith(action);
  });

  it('calls logOut function on logout trigger', () => {
    wrapper = shallow(
      <App
        isLoggedIn={true}
        displayDrawer={false}
        displayNotificationDrawer={mockDisplayNotificationDrawer}
        hideNotificationDrawer={mockHideNotificationDrawer}
        logOut={mockLogOut}
      />
    );

    const event = new KeyboardEvent('keydown', { keyCode: 72, ctrlKey: true });
    window.dispatchEvent(event);
    expect(mockLogOut).toHaveBeenCalled();
  });
});

