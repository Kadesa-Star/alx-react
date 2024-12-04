import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';

/**
 * Action creator for login.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Object} - The LOGIN action.
 */
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

/**
 * Action creator for successful login.
 * @param {Object} userDetails - The user's details returned from the API.
 * @returns {Object} - The LOGIN_SUCCESS action.
 */
export const loginSuccess = (userDetails) => ({
  type: LOGIN_SUCCESS,
  user: userDetails,
});

/**
 * Action creator for failed login.
 * @returns {Object} - The LOGIN_FAILURE action.
 */
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

/**
 * Async action creator for login request.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Function} - A thunk action.
 */
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('/login-success.json');
      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

