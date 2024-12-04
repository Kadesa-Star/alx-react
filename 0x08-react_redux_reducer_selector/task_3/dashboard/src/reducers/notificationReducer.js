import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

// Initial state
const initialState = {
  filter: NotificationTypeFilters.DEFAULT,
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false, // Add isRead attribute
        })),
      };

    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.index
            ? { ...notification, isRead: true } // Mark as read
            : notification
        ),
      };

    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter, // Update the filter
      };

    default:
      return state;
  }
};

export default notificationReducer;
