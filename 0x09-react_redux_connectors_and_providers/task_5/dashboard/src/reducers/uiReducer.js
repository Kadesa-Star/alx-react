import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

// Initial state using Immutable Map
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}, // Initially, user is an empty object
});

// Reducer
export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN_SUCCESS:
      // On login, set isUserLoggedIn to true and update the user state with the action payload
      return state
        .set('isUserLoggedIn', true)
        .set('user', action.payload); // Assuming action.payload contains the user object

    case LOGIN_FAILURE:
    case LOGOUT:
      // On logout, reset user to empty object and set isUserLoggedIn to false
      return state
        .set('isUserLoggedIn', false)
        .set('user', {}); // Reset user to an empty object (or null if desired)

    default:
      return state;
  }
}
