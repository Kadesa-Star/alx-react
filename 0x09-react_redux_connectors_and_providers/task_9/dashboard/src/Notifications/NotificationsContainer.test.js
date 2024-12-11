// src/Notifications/NotificationsContainer.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

describe('NotificationsContainer', () => {
  const mockFetchNotifications = jest.fn();
  const mockProps = {
    unreadNotifications: [],
    displayDrawer: false,
    fetchNotifications: mockFetchNotifications,
    handleDisplayDrawer: jest.fn(),
    handleHideDrawer: jest.fn(),
    markAsRead: jest.fn(),
    setNotificationFilter: jest.fn(),
  };

  beforeEach(() => {
    mockFetchNotifications.mockClear();
  });

  it('should fetch notifications on mount', () => {
    shallow(<NotificationsContainer {...mockProps} />);
    expect(mockFetchNotifications).toHaveBeenCalled();
  });
});

