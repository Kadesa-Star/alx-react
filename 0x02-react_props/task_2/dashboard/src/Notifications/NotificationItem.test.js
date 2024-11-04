import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

// shallow render NotificationItem component
describe('<NotificationItem />', () => {
  it('Tests that NotificationItem renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Passes dummy `type` prop and checks for correct data-notification-type attribute', () => {
    const wrapper = shallow(<NotificationItem type="urgent" />);
    expect(wrapper.prop('data-notification-type')).toBe('urgent');
  });

  it('Passes dummy `value` prop and checks for correct text rendering', () => {
    const wrapper = shallow(<NotificationItem value="This is a success notification" />);
    expect(wrapper.find('li').text()).toBe('This is a success notification');
  });

  it('Passes dummy `html` prop and checks for correct HTML rendering', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
    expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
  });
  
  it('Tests that NotificationItem handles empty value and html props gracefully', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.html()).toBe('<li data-notification-type="default"></li>');
  });
});
