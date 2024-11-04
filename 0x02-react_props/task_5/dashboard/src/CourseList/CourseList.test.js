import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';
import CourseShape from './CourseShape';  // Import CourseShape if necessary

describe('<CourseList />', () => {
	let wrapper;
	const courses = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 }
	];

	beforeEach(() => {
		// This will run before each test
		wrapper = shallow(<CourseList />);
	});

	it('Renders CourseList component without crashing', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('Renders "No course available yet" message when no courses are provided', () => {
		const noCoursesWrapper = shallow(<CourseList listCourses={[]} />);
		expect(noCoursesWrapper.find('p').text()).toBe('No course available yet');
	});

	it('Renders several CourseListRow Components when listCourses is provided', () => {
		const wrapperWithCourses = shallow(<CourseList listCourses={courses} />);
		expect(wrapperWithCourses.find('CourseListRow').length).toBe(courses.length);
	});

	it('Renders correct course information for each CourseListRow', () => {
		const wrapperWithCourses = shallow(<CourseList listCourses={courses} />);
		const rows = wrapperWithCourses.find('CourseListRow');

		rows.forEach((row, index) => {
			expect(row.prop('textFirstCell')).toBe(courses[index].name);
			expect(row.prop('textSecondCell')).toBe(courses[index].credit);
		});
	});

	it('Has default props for listCourses', () => {
		expect(CourseList.defaultProps.listCourses).toEqual([]);
	});
});
