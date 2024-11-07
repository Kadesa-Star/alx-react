import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('Tests that NotificationItem renders without crashing', () => {
    const wrapper = shallow(<NotificationItem id={1} markAsRead={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders correctly with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" id={1} markAsRead={() => {}} />);
    expect(wrapper.find('li').text()).toBe('test');
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  });

  it('Renders correctly with html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} id={1} markAsRead={() => {}} />);
    expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
    expect(wrapper.find('li').children().html()).toBe('dangerouslySetInnerHtml');  // Ensure it's inside the li
  });

  it('Applies correct class based on notification type', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="Urgent Notification" id={1} markAsRead={() => {}} />);
    expect(wrapper.find('li').hasClass('urgent')).toBe(true);  // Assuming you have a CSS class for urgent notifications
  });

  it('Logs a warning for incorrect prop types', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    shallow(<NotificationItem type={123} id={1} markAsRead={() => {}} />);  // Invalid type
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('Calls markAsRead with the correct ID when clicked', () => {
    const markAsRead = jest.fn();  // Mock function
    const wrapper = shallow(<NotificationItem id={1} markAsRead={markAsRead} value="Test notification" />);
    
    // Spy on console.log to check if the log message is printed
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Simulate the click event
    wrapper.simulate('click');

    // Verify that markAsRead was called with the correct ID
    expect(markAsRead).toHaveBeenCalledWith(1);

    // Verify the correct console.log message
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    
    // Restore console.log
    consoleSpy.mockRestore();
  });
});
