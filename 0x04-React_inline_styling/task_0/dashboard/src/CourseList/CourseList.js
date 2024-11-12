import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';

const CourseList = ({ listCourses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Course name</th>
          <th>Credit</th>
        </tr>
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td colSpan="2">No course available yet</td>
          </tr>
        ) : (
          listCourses.map(course => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
