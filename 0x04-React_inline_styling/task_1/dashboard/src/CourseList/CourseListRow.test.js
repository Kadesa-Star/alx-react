import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a header row with correct background color when isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" />);
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('renders a regular row with correct background color when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row 1" textSecondCell="Row 2" />);
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });

  it('renders one header cell with colSpan=2 if textSecondCell is null and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toBe("2");
    expect(th.text()).toEqual('Header 1');
  });

  it('renders two header cells if textSecondCell is provided and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toEqual('Header 1');
    expect(th.at(1).text()).toEqual('Header 2');
  });

  it('renders two data cells if isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toEqual('Cell 1');
    expect(td.at(1).text()).toEqual('Cell 2');
  });
});
