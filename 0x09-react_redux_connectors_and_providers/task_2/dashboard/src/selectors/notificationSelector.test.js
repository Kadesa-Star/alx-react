// src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('Notification Selectors', () => {
  const initialState = fromJS({
    filter: NotificationTypeFilters.DEFAULT,
    notifications: {
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    },
  });

  it('should return the selected filter type', () => {
    const filter = filterTypeSelected(initialState);
    expect(filter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('should return the list of notifications', () => {
    const notifications = getNotifications(initialState);
    expect(notifications).toEqual(initialState.getIn(['notifications']));
  });

  it('should return only unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    const expectedUnreadNotifications = fromJS({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });

    expect(unreadNotifications).toEqual(expectedUnreadNotifications);
  });
});

