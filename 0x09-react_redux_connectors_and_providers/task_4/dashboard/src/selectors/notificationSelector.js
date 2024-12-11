// src/selectors/notificationSelector.js
import { createSelector } from 'reselect';

// Selector to get the filter from the state
export const filterTypeSelected = (state) => state.get('filter');

// Selector to get all notifications from the state
export const getNotifications = (state) => state.getIn(['notifications']);

// Selector to get unread notifications
export const getUnreadNotifications = (state) => {
  return state.getIn(['notifications']).filter(notification => !notification.isRead);
};
