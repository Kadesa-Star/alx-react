import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

/**
 * Action creator to log in a user.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {Object} - The action object.
 */
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

/**
 * Action creator to log out a user.
 * @returns {Object} - The action object.
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Action creator to display the notification drawer.
 * @returns {Object} - The action object.
 */
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

/**
 * Action creator to hide the notification drawer.
 * @returns {Object} - The action object.
 */
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

// Bound action creators
export const boundLogin = (dispatch) => (email, password) => dispatch(login(email, password));
export const boundLogout = (dispatch) => () => dispatch(logout());
export const boundDisplayNotificationDrawer = (dispatch) => () => dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = (dispatch) => () => dispatch(hideNotificationDrawer());
