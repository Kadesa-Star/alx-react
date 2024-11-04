import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow'; // Importing CourseListRow for testing props

// shallow render CourseList component
describe('<CourseList />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    });

    it(`Renders CourseList component without crashing`, () => {
        expect(wrapper.exists()).toBe(true);
    });

    it(`Renders the correct number of CourseListRow components`, () => {
        expect(wrapper.find(CourseListRow).length).toBe(5);
    });

    it(`Has the correct table ID`, () => {
        expect(wrapper.find('table#CourseList').exists()).toBe(true);
    });

    it(`Renders the header rows correctly`, () => {
        const headerRows = wrapper.find(CourseListRow).filter({ isHeader: true });
        expect(headerRows.length).toBe(2);
        expect(headerRows.at(0).prop('textFirstCell')).toBe('Available Courses');
        expect(headerRows.at(1).prop('textFirstCell')).toBe('Course name');
        expect(headerRows.at(1).prop('textSecondCell')).toBe('Credit');
    });

    it(`Renders the body rows with correct course data`, () => {
        const bodyRows = wrapper.find(CourseListRow).filter({ isHeader: false });
        expect(bodyRows.length).toBe(3);
        expect(bodyRows.at(0).prop('textFirstCell')).toBe('ES6');
        expect(bodyRows.at(0).prop('textSecondCell')).toBe('60');
        expect(bodyRows.at(1).prop('textFirstCell')).toBe('Webpack');
        expect(bodyRows.at(1).prop('textSecondCell')).toBe('20');
        expect(bodyRows.at(2).prop('textFirstCell')).toBe('React');
        expect(bodyRows.at(2).prop('textSecondCell')).toBe('40');
    });
});

