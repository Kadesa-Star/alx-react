// Action Type
export const SET_COURSES = 'SET_COURSES';

// Action Creator for setting courses
export const setCourses = (courses) => ({
  type: SET_COURSES,
  courses,
});

// Thunk action for fetching courses
export const fetchCourses = () => {
  return (dispatch) => {
    fetch('/dist/courses.json')  // Fetch courses from the dist folder
      .then((response) => response.json())  // Parse the response to JSON
      .then((data) => {
        dispatch(setCourses(data));  // Dispatch the action to set courses
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  };
};

