import { fromJS } from 'immutable';
import { getCourses } from './courseSelector';

describe('getCourses Selector', () => {
  it('should return all courses as a List', () => {
    // Sample state for testing
    const state = fromJS({
      courses: {
        1: { id: 1, name: 'Course 1', description: 'Description of Course 1' },
        2: { id: 2, name: 'Course 2', description: 'Description of Course 2' },
      },
    });

    // Call the selector
    const result = getCourses(state);

    // Verify that the result is an Immutable List and contains the correct course entities
    expect(result.size).toBe(2); // There should be 2 courses in the List
    expect(result.get(0).get('name')).toBe('Course 1'); // First course name should be 'Course 1'
    expect(result.get(1).get('name')).toBe('Course 2'); // Second course name should be 'Course 2'
  });

  it('should return an empty List if there are no courses', () => {
    // Sample state with no courses
    const state = fromJS({
      courses: {},
    });

    // Call the selector
    const result = getCourses(state);

    // Verify that the result is an empty List
    expect(result.size).toBe(0);
  });
});
