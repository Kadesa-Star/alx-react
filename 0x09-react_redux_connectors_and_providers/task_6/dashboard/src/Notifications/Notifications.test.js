import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors';

jest.mock('../actions/notificationActionCreators', () => ({
  markAsRead: jest.fn(),
}));

jest.mock('../selectors', () => ({
  getUnreadNotifications: jest.fn(),
}));

describe('Notifications component', () => {
  let wrapper;
  const mockHandleDisplayDrawer = jest.fn();
  const mockHandleHideDrawer = jest.fn();

  beforeEach(() => {
    getUnreadNotifications.mockReturnValue([
      { id: 1, value: 'New notification', isRead: false },
    ]);
    wrapper = shallow(
      <Notifications
        unreadNotifications={[{ id: 1, value: 'New notification', isRead: false }]}
        displayDrawer={true}
        handleDisplayDrawer={mockHandleDisplayDrawer}
        handleHideDrawer={mockHandleHideDrawer}
        markAsRead={markAsRead}
      />
    );
  });

  it('should render the notifications', () => {
    expect(wrapper.find('li').length).toBe(1); // There should be one notification
  });

  it('should call markAsRead when a notification is clicked', () => {
    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(1); // Check if markAsRead was called with the correct id
  });

  it('should display "No notification available yet" when no notifications', () => {
    wrapper.setProps({ unreadNotifications: [] });
    expect(wrapper.find('p').text()).toBe('No notification available yet');
  });
});

