import { fetchCourses, setCourses, SET_COURSES } from './courseActionCreators';

// Mocking the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'Course 1', description: 'Description of Course 1' },
      { id: 2, name: 'Course 2', description: 'Description of Course 2' },
    ]),
  })
);

describe('courseActionCreators', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear the mocks after each test
  });

  it('should dispatch setCourses action when fetchCourses is called', async () => {
    // Mock the dispatch function
    const dispatch = jest.fn();

    // Call fetchCourses
    await fetchCourses()(dispatch);

    // Verify that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith('/dist/courses.json');

    // Verify that setCourses was called with the correct data
    expect(dispatch).toHaveBeenCalledWith(setCourses([
      { id: 1, name: 'Course 1', description: 'Description of Course 1' },
      { id: 2, name: 'Course 2', description: 'Description of Course 2' },
    ]));
  });

  it('should create the correct action for setCourses', () => {
    const courses = [
      { id: 1, name: 'Course 1', description: 'Description of Course 1' },
      { id: 2, name: 'Course 2', description: 'Description of Course 2' },
    ];
    const expectedAction = {
      type: SET_COURSES,
      courses,
    };

    expect(setCourses(courses)).toEqual(expectedAction);
  });
});
