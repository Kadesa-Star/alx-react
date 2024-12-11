import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer with Immutable.js tests', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it('should return the initial state when no action is passed', () => {
    const result = uiReducer(undefined, {});
    expect(result.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when an unknown action is passed', () => {
    const result = uiReducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(result.toJS()).toEqual(initialState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const result = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(result.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const state = initialState.set('isNotificationDrawerVisible', true);
    const result = uiReducer(state, { type: HIDE_NOTIFICATION_DRAWER });
    expect(result.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: false,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const result = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(result.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: true,
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    const state = initialState.set('isUserLoggedIn', true);
    const result = uiReducer(state, { type: LOGIN_FAILURE });
    expect(result.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
    });
  });

  it('should handle LOGOUT', () => {
    const state = initialState.set('isUserLoggedIn', true);
    const result = uiReducer(state, { type: LOGOUT });
    expect(result.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
    });
  });
});
