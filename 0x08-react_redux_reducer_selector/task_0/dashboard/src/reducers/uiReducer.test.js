import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN,
} from '../actions/uiActionTypes';

describe('uiReducer tests', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('should return the initial state when no action is passed', () => {
    const result = uiReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('should return the initial state when an unknown action is passed', () => {
    const result = uiReducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(result).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const result = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(result).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const result = uiReducer(
      { ...initialState, isNotificationDrawerVisible: true },
      { type: HIDE_NOTIFICATION_DRAWER }
    );
    expect(result).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const result = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(result).toEqual({
      ...initialState,
      isUserLoggedIn: true,
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    const result = uiReducer(
      { ...initialState, isUserLoggedIn: true },
      { type: LOGIN_FAILURE }
    );
    expect(result).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });

  it('should handle LOGIN (optional)', () => {
    const result = uiReducer(initialState, { type: LOGIN });
    expect(result).toEqual({
      ...initialState,
      // Add expected state change for LOGIN if any
    });
  });
});
