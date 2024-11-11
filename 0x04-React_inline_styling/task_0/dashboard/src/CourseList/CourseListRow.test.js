import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('applies headerStyle when isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
        expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
    });

    it('applies rowStyle when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row" textSecondCell="Cell" />);
        expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
    });

    it('renders header cells when isHeader is true and textSecondCell is provided', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
        expect(wrapper.find('th').length).toBe(2);
        expect(wrapper.find('th').at(0).text()).toBe('Header 1');
        expect(wrapper.find('th').at(1).text()).toBe('Header 2');
    });

    it('renders a single header cell with colspan of 2 when isHeader is true and textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Single Header" />);
        expect(wrapper.find('th').length).toBe(1);
        expect(wrapper.find('th').prop('colSpan')).toBe('2');
        expect(wrapper.find('th').text()).toBe('Single Header');
    });

    it('renders regular cells when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row 1" textSecondCell="Row 2" />);
        expect(wrapper.find('td').length).toBe(2);
        expect(wrapper.find('td').at(0).text()).toBe('Row 1');
        expect(wrapper.find('td').at(1).text()).toBe('Row 2');
    });
});
