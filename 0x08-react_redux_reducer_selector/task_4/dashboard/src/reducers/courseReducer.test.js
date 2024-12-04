import { fromJS } from 'immutable';
import courseReducer from './courseReducer'; // Adjust the import based on your file structure
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses'; // Import coursesNormalizer function

// Sample courses data
const coursesData = [
  { id: 1, name: 'Course 1' },
  { id: 2, name: 'Course 2' },
  { id: 3, name: 'Course 3' },
];

describe('courseReducer', () => {
  it('should handle FETCH_COURSE_SUCCESS and normalize the data', () => {
    const normalizedCourses = coursesNormalizer(coursesData); // Normalize the data
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: normalizedCourses,
    };

    const expectedState = fromJS({
      courses: normalizedCourses,
    });

    const newState = courseReducer(undefined, action);

    // Check that the state is a Map and contains the normalized courses
    expect(newState.get('courses')).toEqual(expectedState.get('courses'));
  });

  it('should handle SELECT_COURSE and set isSelected to true', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'Course 1', isSelected: false },
        2: { id: 2, name: 'Course 2', isSelected: false },
      },
    });

    const action = {
      type: SELECT_COURSE,
      index: 1,
    };

    const newState = courseReducer(initialState, action);

    // Verify that the course with id 1 is selected
    expect(newState.getIn(['courses', 1, 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE and set isSelected to false', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'Course 1', isSelected: true },
        2: { id: 2, name: 'Course 2', isSelected: true },
      },
    });

    const action = {
      type: UNSELECT_COURSE,
      index: 1,
    };

    const newState = courseReducer(initialState, action);

    // Verify that the course with id 1 is unselected
    expect(newState.getIn(['courses', 1, 'isSelected'])).toBe(false);
  });
});

