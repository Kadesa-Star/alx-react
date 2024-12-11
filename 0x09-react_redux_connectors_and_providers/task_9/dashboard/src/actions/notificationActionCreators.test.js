import { setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import { SET_LOADING_STATE, SET_NOTIFICATIONS, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

describe('notification actions', () => {
  it('should create an action to set loading state', () => {
    const expectedAction = {
      type: SET_LOADING_STATE,
      loading: true,
    };
    expect(setLoadingState(true)).toEqual(expectedAction);
  });

  it('should create an action to set notifications', () => {
    const notifications = [{ id: 1, type: 'default', value: 'New notification' }];
    const expectedAction = {
      type: SET_NOTIFICATIONS,
      notifications,
    };
    expect(setNotifications(notifications)).toEqual(expectedAction);
  });

  it('should dispatch FETCH_NOTIFICATIONS_SUCCESS when fetchNotifications is called', () => {
    const dispatch = jest.fn();
    const notifications = [{ id: 1, type: 'default', value: 'New notification' }];
    fetchNotifications()(dispatch);
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });
});

