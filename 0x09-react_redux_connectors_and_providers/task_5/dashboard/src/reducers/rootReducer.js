import { combineReducers } from 'redux';
import { Map } from 'immutable';
import courseReducer, { initialCourseState } from './courseReducer';
import notificationReducer, { initialNotificationState } from './notificationReducer';
import uiReducer, { initialUiState } from './uiReducer';

// Initialize state using Immutable.js
export const initialState = {
  courses: Map(initialCourseState),
  notifications: Map(initialNotificationState),
  ui: Map(initialUiState),
};

// Combine reducers
const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;
