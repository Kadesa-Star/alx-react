import React from "react";
import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";

describe('Basic React Tests - <CourseListRow />', function() {
  it('Should render without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='start' />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('When isHeader is true - Should render one cell with colspan = 2 when textSecondCell does not exist', function() {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='start' />);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });

  it('When isHeader is true - Should render two cells when textSecondCell is present', function() {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='start'
        textSecondCell='build'
      />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('When isHeader is false - Should render correctly two td elements within a tr element', function(){
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='Txt1'
        textSecondCell='Txt2'
      />
    );
    expect(wrapper.find('tr').children('td')).toHaveLength(2);
  });

  // Test for background color when isHeader is true
  it('When isHeader is true - Should apply the correct background color to the header row', function() {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='Header'
        textSecondCell='Column'
      />
    );
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  // Test for background color when isHeader is false
  it('When isHeader is false - Should apply the correct background color to the regular row', function() {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='Course'
        textSecondCell='10'
      />
    );
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
  });
});
