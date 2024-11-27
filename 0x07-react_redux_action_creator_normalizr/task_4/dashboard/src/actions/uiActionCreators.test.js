import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('UI Action Creators', () => {
  it('should create a login action', () => {
    const email = 'test@example.com';
    const password = '123456';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('should create a logout action', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('should create a display notification drawer action', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('should create a hide notification drawer action', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});
