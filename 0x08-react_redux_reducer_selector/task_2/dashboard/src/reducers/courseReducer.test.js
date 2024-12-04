import courseReducer from '../reducers/courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = [];

  it('should return the initial state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when an unknown action is passed', () => {
    const state = courseReducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS and set isSelected to false for all courses', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const state = courseReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and update the correct course to isSelected: true', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const action = { type: SELECT_COURSE, index: 2 };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and update the correct course to isSelected: false', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const action = { type: UNSELECT_COURSE, index: 2 };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
