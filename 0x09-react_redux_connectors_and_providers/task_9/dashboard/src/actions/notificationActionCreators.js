import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

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

/**
 * Action creator to set the loading state for notifications.
 * @param {boolean} isLoading - Whether notifications are currently being loaded.
 * @returns {Object} - The action object.
 */
export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  payload: isLoading,
});

/**
 * Action creator to set the notifications data.
 * @param {Array} notifications - The notifications data to store.
 * @returns {Object} - The action object.
 */
export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
});

/**
 * Action creator to fetch notifications.
 * @returns {Function} - A function that dispatches actions asynchronously.
 */
export const fetchNotifications = () => {
  return (dispatch) => {
    // Dispatch the loading state as true when starting the fetch
    dispatch(setLoadingState(true));

    // Fetch data from the API (adjust the URL as needed)
    fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the fetched notifications after success
        dispatch(setNotifications(data));
        // Set the loading state to false after fetching is complete
        dispatch(setLoadingState(false));
      })
      .catch((error) => {
        // Handle error and stop loading state
        console.error('Error fetching notifications:', error);
        dispatch(setLoadingState(false));
      });
  };
};

// Bound action creators
export const boundMarkAsRead = (dispatch) => (index) => dispatch(markAsRead(index));
export const boundSetNotificationFilter = (dispatch) => (filter) => dispatch(setNotificationFilter(filter));
export const boundFetchNotifications = (dispatch) => () => dispatch(fetchNotifications());

