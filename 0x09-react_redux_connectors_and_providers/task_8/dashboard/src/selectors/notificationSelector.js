import { createSelector } from 'reselect';

// Selector to get the filter from the state
export const filterTypeSelected = (state) => state.get('filter');

// Selector to get all notifications from the state
export const getNotifications = (state) => state.getIn(['notifications']);

// Memoized Selector to get unread notifications based on the filter type
export const getUnreadNotificationsByType = createSelector(
  [getNotifications, filterTypeSelected],
  (notifications, filter) => {
    if (filter === 'urgent') {
      return notifications.filter((notification) => !notification.isRead && notification.type === 'urgent');
    }
    return notifications.filter((notification) => !notification.isRead);
  }
);

