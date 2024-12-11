import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications'; // Import the normalizer
import { Map, fromJS } from 'immutable';

// Initial state using Immutable.js Map
const initialState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  notifications: Map(),
  loading: false,  // Add a loading attribute to track the loading state
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      // Set the loading state
      return state.set('loading', action.payload);

    case FETCH_NOTIFICATIONS_SUCCESS:
      // Normalize the notifications data and merge it into the state
      const normalizedNotifications = notificationsNormalizer(action.data);
      // Use mergeDeep to merge data properly
      return state.set('notifications', normalizedNotifications);

    case MARK_AS_READ:
      // Use Immutable's setIn to mark a specific notification as read
      return state.setIn(
        ['notifications', action.index, 'isRead'],
        true
      );

    case SET_TYPE_FILTER:
      // Use set to update the filter state
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;

