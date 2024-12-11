import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';

const styles = StyleSheet.create({
  CourseList: {
    width: '90vw',
    margin: '0 5vw',
    border: '1px solid grey',
  },
});

function CourseList({ courses, fetchCourses, selectCourse, unSelectCourse }) {
  useEffect(() => {
    fetchCourses(); // Fetch courses when the component mounts
  }, [fetchCourses]);

  const onChangeRow = (id, checked) => {
    if (checked) {
      selectCourse(id); // Dispatch action to select a course
    } else {
      unSelectCourse(id); // Dispatch action to unselect a course
    }
  };

  return (
    <>
      <table className={css(styles.CourseList)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {courses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" />
          ) : (
            courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isChecked={course.isSelected} // Pass selection state from Redux
                onChangeRow={onChangeRow} // Pass the onChangeRow handler
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
      isSelected: PropTypes.bool, // Whether the course is selected
    })
  ),
  fetchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired,
};

CourseList.defaultProps = {
  courses: [],
};

const mapStateToProps = (state) => ({
  courses: getListCourses(state), // Use the selector to get the course list
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);

