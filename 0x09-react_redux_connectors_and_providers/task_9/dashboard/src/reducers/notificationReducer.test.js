import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  const initialState = fromJS({
    filter: NotificationTypeFilters.DEFAULT,
    notifications: {},
    loading: false, // New loading attribute
  });

  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [{ id: 1, type: 'default', value: 'New notification' }],
    };
    const newState = notificationReducer(initialState, action);
    expect(newState.get('notifications')).toEqual(fromJS({
      1: { id: 1, type: 'default', value: 'New notification', isRead: false },
    }));
  });

  it('should handle MARK_AS_READ', () => {
    const action = {
      type: MARK_AS_READ,
      index: 1,
    };
    const initialStateWithNotification = initialState.set('notifications', fromJS({
      1: { id: 1, type: 'default', value: 'New notification', isRead: false },
    }));
    const newState = notificationReducer(initialStateWithNotification, action);
    expect(newState.getIn(['notifications', 1, 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    const newState = notificationReducer(initialState, action);
    expect(newState.get('filter')).toBe(NotificationTypeFilters.URGENT);
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = {
      type: SET_LOADING_STATE,
      loading: true,
    };
    const newState = notificationReducer(initialState, action);
    expect(newState.get('loading')).toBe(true);
  });
});

