import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App'; // Assuming you're exporting a named export of App
import { Notifications } from '../Notifications/Notifications';
import { BodySectionWithMarginBottom } from '../BodySection/BodySectionWithMarginBottom';
import { CourseList } from '../CourseList/CourseList';
import { Login } from '../Login/Login';

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

    // Test that Notifications is rendered with the correct props
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

    // Test that the CourseList component is rendered when logged in
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

    // Test that the Login component is rendered when not logged in
    const bodySectionWithMarginBottom = wrapper.find(BodySectionWithMarginBottom);
    expect(bodySectionWithMarginBottom.length).toBe(1);
    expect(bodySectionWithMarginBottom.props().title).toBe('Login in to continue');
    expect(bodySectionWithMarginBottom.find(Login).length).toBe(1);
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

    // Test that logOut function is called when keydown event is triggered with ctrl + h
    const event = new KeyboardEvent('keydown', { keyCode: 72, ctrlKey: true });
    window.dispatchEvent(event);

    expect(mockLogOut).toHaveBeenCalled();
  });
});
