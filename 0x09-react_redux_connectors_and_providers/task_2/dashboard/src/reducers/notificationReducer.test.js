import { fromJS } from 'immutable';
import notificationReducer from '../reducers/notificationReducer';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications'; // Import notificationsNormalizer function

describe('notificationReducer', () => {
  const initialState = fromJS({
    filter: NotificationTypeFilters.DEFAULT,
    notifications: {},
  });

  it('should return the initial state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and normalize the data', () => {
    const notificationsData = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];

    const normalizedData = notificationsNormalizer(notificationsData); // Normalize data

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: normalizedData,
    };

    const expectedState = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: normalizedData.entities.notifications,
    });

    const state = notificationReducer(undefined, action);
    expect(state.get('notifications')).toEqual(expectedState.get('notifications'));
  });

  it('should handle MARK_AS_READ and update the notification with the specified index', () => {
    const initialState = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      },
    });

    const action = { type: MARK_AS_READ, index: 2 };

    const newState = notificationReducer(initialState, action);

    // Verify the notification with id 2 is marked as read
    expect(newState.getIn(['notifications', '2', 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER and update the filter attribute', () => {
    const action = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT };

    const expectedState = fromJS({
      filter: NotificationTypeFilters.URGENT,
      notifications: {},
    });

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });
});

