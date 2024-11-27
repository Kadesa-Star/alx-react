import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

/**
 * Action creator for login.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Object} - The login action.
 */
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

/**
 * Action creator for logout.
 * @returns {Object} - The logout action.
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Action creator for displaying the notification drawer.
 * @returns {Object} - The action to display the notification drawer.
 */
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

/**
 * Action creator for hiding the notification drawer.
 * @returns {Object} - The action to hide the notification drawer.
 */
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

