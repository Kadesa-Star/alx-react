// src/Notifications/Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  const mockMarkAsRead = jest.fn();
  const mockSetNotificationFilter = jest.fn();
  const props = {
    unreadNotifications: [{ id: 1, value: 'New notification', isRead: false }],
    displayDrawer: true,
    handleDisplayDrawer: jest.fn(),
    handleHideDrawer: jest.fn(),
    markAsRead: mockMarkAsRead,
    setNotificationFilter: mockSetNotificationFilter,
  };

  it('should render the notifications', () => {
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.find('li').length).toBe(1);
  });

  it('should call markAsRead when a notification is clicked', () => {
    const wrapper = shallow(<Notifications {...props} />);
    wrapper.find('li').simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });

  it('should call setNotificationFilter with URGENT when the first button is clicked', () => {
    const wrapper = shallow(<Notifications {...props} />);
    wrapper.find('button').at(1).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('URGENT');
  });

  it('should call setNotificationFilter with DEFAULT when the second button is clicked', () => {
    const wrapper = shallow(<Notifications {...props} />);
    wrapper.find('button').at(2).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('DEFAULT');
  });
});

