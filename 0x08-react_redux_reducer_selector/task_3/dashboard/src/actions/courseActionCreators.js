import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Action creator to select a course.
 * @param {number} index - The index of the course to select.
 * @returns {Object} - The action object.
 */
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

/**
 * Action creator to unselect a course.
 * @param {number} index - The index of the course to unselect.
 * @returns {Object} - The action object.
 */
export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

// Bound action creators
export const boundSelectCourse = (dispatch) => (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (dispatch) => (index) => dispatch(unSelectCourse(index));
