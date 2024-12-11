import { createSelector } from 'reselect';

/**
 * Selector to get all the courses from the state
 * @param {Object} state - The Redux state
 * @returns {List} - A List of course entities
 */
export const getCourses = (state) => {
  return state.courses.valueSeq(); // Assuming the courses are stored in an Immutable Map
};

