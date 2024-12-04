import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN,
} from '../actions/uiActionTypes';

// Initial state
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

// Reducer
export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    case LOGIN: // Optional if the `LOGIN` action does something else
      return {
        ...state,
        // Logic for LOGIN if required
      };
    default:
      return state;
  }
}
