import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Action creator to mark a notification as read.
 * @param {number} index - The index of the notification to mark as read.
 * @returns {Object} - The action object.
 */
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

/**
 * Action creator to set the notification filter.
 * @param {string} filter - The notification filter to set.
 * @returns {Object} - The action object.
 */
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});
