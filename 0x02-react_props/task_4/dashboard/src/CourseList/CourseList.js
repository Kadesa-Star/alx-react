import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

const CourseList = ({ courses }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available Courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody id="CourseBody">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseListRow
              key={index}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        ) : (
          <CourseListRow
            isHeader={false}
            textFirstCell="No courses available"
            textSecondCell=""
          />
        )}
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  courses: [],
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      credit: PropTypes.string.isRequired,
    })
  ),
};

export default CourseList;

