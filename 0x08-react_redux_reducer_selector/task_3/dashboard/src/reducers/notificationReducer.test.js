import notificationReducer from '../reducers/notificationReducer';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = {
    filter: NotificationTypeFilters.DEFAULT,
    notifications: [],
  };

  it('should return the initial state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and add isRead to notifications', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };

    const expectedState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and update the notification with the specified index', () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const action = { type: MARK_AS_READ, index: 2 };

    const expectedState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter attribute', () => {
    const action = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT };

    const expectedState = {
      filter: NotificationTypeFilters.URGENT,
      notifications: [],
    };

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });
});
