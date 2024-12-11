import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators', () => ({
  fetchNotifications: jest.fn(),
}));

describe('Notifications component', () => {
  let wrapper;
  const mockHandleDisplayDrawer = jest.fn();
  const mockHandleHideDrawer = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        listNotifications={[]}
        displayDrawer={false}
        handleDisplayDrawer={mockHandleDisplayDrawer}
        handleHideDrawer={mockHandleHideDrawer}
      />
    );
  });

  it('should call fetchNotifications when the component is mounted', () => {
    expect(fetchNotifications).toHaveBeenCalled();
  });

  it('should render correctly when there are no notifications', () => {
    expect(wrapper.find('ul').text()).toBe('No notification available yet');
  });

  it('should render NotificationItem when notifications are passed', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New notification' },
    ];
    wrapper.setProps({ listNotifications: notifications });
    expect(wrapper.find('NotificationItem').length).toBe(1);
  });
});

